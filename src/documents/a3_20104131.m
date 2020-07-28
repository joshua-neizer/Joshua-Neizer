function a3_20104131
% Function for CISC271, Winter 2020, Assignment #3
[rmsvars lowndx rmstrain rmstest] = A3
end

function [rmsvars lowndx rmstrain rmstest] = A3
% [RMSVARS LOWNDX RMSTRAIN RMSTEST]=A3 finds the RMS errors of
% linear regression of the data in the file "MTLS.CSV" by treating
% each column as a vector of dependent observations, using the other
% columns of the data as observations of independent varaibles. The
% individual RMS errors are returned in RMSVARS and the index of the
% smallest RMS error is returned in LOWNDX. For the variable that is
% best explained by the other variables, a 5-fold cross validation is
% computed. The RMS errors for the training of each fold are returned
% in RMSTEST and the RMS errors for the testing of each fold are
% returned in RMSTEST.
%
% INPUTS:
%         none
% OUTPUTS:
%         RMSVARS  - 1xN array of RMS errors of linear regression
%         LOWNDX   - integer scalar, index into RMSVALS
%         RMSTRAIN - 1x5 array of RMS errors for 5-fold training
%         RMSTEST  - 1x5 array of RMS errors for 5-fold testing

[rmsvars lowndx] = a3q1;
[rmstrain rmstest] = a3q2(lowndx);

end

function [rmsvars lowndx] = a3q1
% [RMSVARS LOWNDX]=A3Q1 finds the RMS errors of
% linear regression of the data in the file "MTLS.CSV" by treating
% each column as a vector of dependent observations, using the other
% columns of the data as observations of independent variables. The
% individual RMS errors are returned in RMSVARS and the index of the
% smallest RMS error is returned in LOWNDX. 
%
% INPUTS:
%         none
% OUTPUTS:
%         RMSVARS  - 1xN array of RMS errors of linear regression
%         LOWNDX   - integer scalar, index into RMSVALS

% Read the test data from a CSV file; find the size of the data
% Instantiates the matrix and reads the headers for the variables
Amat = csvread('mtls.csv', 1, 1);
    
% Instanties matrix dimensions
[m, n] = size(Amat);

% Asigns the labels for commodities
fileID = fopen('mtls.csv', 'r');
txt = textscan(fileID, '%s', n+1, 'Delimiter', ',');
fclose(fileID);
labels = txt{1}(2:end);

% Iterates through every commodity in the matrix to check for null values
for x=1:n
    current = Amat (:,x);
    % If first the value is null, it is set to the zero
    previous = 0;
    % Iterates checks every value of vector and if a null value is found
    % the previous value is assigned to the current value
    for y=1:m
        if (current (y) == 0)
            current (y) = previous;
        else
            previous = current (y);
        end
    end
    
    Amat (:,x) = current;
end

% Compute the RMS errors for linear regression

% Standardizes the Matrix
SAmat = zscore(Amat);

% Instantiates matrix
rmsvars = zeros(1, n);

% Uses every vector as the dependent vector for the linear regression and
% measures the RMS of the projection to find the best dependent vector
for x=1:n
    yvec = SAmat (:,x);
    Xmat = SAmat;
    Xmat(:,x) = [];
    p = Xmat*(Xmat\yvec);
    % Calculates the rms of the projection
    rmsvars(:,x) = sqrt(mean((yvec-p).^2));
end

% Finds the vector that has the lowest rms value
[~, lowndx] = min(rmsvars);



% Find the regression in unstandardized variables

% Performs linear regression with the dependent vector that corresponds
% with the lowesest rms value on undstandarized data
yvec = Amat (:,lowndx);
Xmat = Amat;
Xmat(:,lowndx) = [];
p = Xmat*(Xmat\yvec);


% Plot the results

% The data values are plotted as a line graph
% The regression is plotted as circle
figure(1);
plot([1:m], yvec);
title(sprintf("Linear Regression of %s", labels{lowndx}));
xlabel("Quarterly index from 1992Q1");
ylabel("Commodity Price (USD, $)");
hold on;
plot([1:m], p, "o");
hold off;
legend('Price','Regression');
end

function [rmstrain rmstest] = a3q2(lowndx)
% [RMSTRAIN RMSTEST]=A3Q2(LOWNDX) finds the RMS errors of 5-fold
% cross-validation for the variable LOWNDX of the data in the file
% "MTLS.CSV" The RMS errors for the training of each fold are returned
% in RMSTEST and the RMS errors for the testing of each fold are
% returned in RMSTEST.
%
% INPUTS:
%         LOWNDX   - integer scalar, index into the data
% OUTPUTS:
%         RMSTRAIN - 1x5 array of RMS errors for 5-fold training
%         RMSTEST  - 1x5 array of RMS errors for 5-fold testing

% Instantiates the matrix from the csv file
Amat = csvread('mtls.csv', 1, 1);
    
% Instanties matrix dimensions
[m, n] = size(Amat);

% Iterates through every commodity in the matrix to check for null values
for x=1:n
    current = Amat (:,x);
    % If first the value is null, it is set to the zero
    previous = 0;
    % Iterates checks every value of vector and if a null value is found
    % the previous value is assigned to the current value
    for y=1:m
        if (current (y) == 0)
            current (y) = previous;
        else
            previous = current (y);
        end
    end
    
    Amat (:,x) = current;
end



% Create Xmat and yvec from the data and the input parameter,
% accounting for no standardization of data

% Performs linear regression with the dependent vector that corresponds
% with the lowesest rms value on undstandarized data
yvec = Amat (:,lowndx);
Xmat = Amat;
Xmat(:,lowndx) = [];
% Standardizes the variables
SXmat = zscore(Xmat);
Syvec = zscore(yvec);

% Calculates the standard deviation of yvec
var = norm(yvec-mean(yvec))/sqrt(m-1);

% Compute the RMS errors of 5-fold cross-validation

[rmstrain rmstest] = mykfold(SXmat, Syvec, var);
end

function [rmstrain,rmstest]=mykfold(Xmat, yvec, var, k_in)
% [RMSTRAIN,RMSTEST]=MYKFOLD(XMAT,YVEC,K) performs a k-fold validation
% of the least-squares linear fit of YVEC to XMAT. If K is omitted,
% the default is 5.
%
% INPUTS:
%         XMAT     - MxN data vector
%         YVEC     - Mx1 data vector
%         K        - positive integer, number of folds to use
% OUTPUTS:
%         RMSTRAIN - 1xK vector of RMS error of the training fits
%         RMSTEST  - 1xK vector of RMS error of the testing fits

% Problem size
M = size(Xmat, 1);

% Set the number of folds; must be 1<k<M
if nargin >= 5 & ~isempty(k_in)
  k = max(min(round(k_in), M-1), 2);
else
  k = 5;
end

% Randomly assign the data into k folds; discard any remainders
one2M = 1:M;
Mk = floor(M/k);
ndxmat = reshape(randperm(M,Mk*k), k, Mk);

% Initialize the return variables
rmstrain = zeros(1, k);
rmstest  = zeros(1, k);


% Process each fold
for ix=1:k
    % Creates the randomly ordered index for the "train" and "test" data 
    ndxtrain   = reshape(ndxmat([1:(ix-1) (ix+1):k], :), Mk*(k-1), 1);
    ndxtest    = reshape(ndxmat(ix, :), Mk, 1);
       
    % Initalizes the "train" indexing for "xmat" and "yvec"
    xmat_train  = Xmat(ndxtrain,:);
    % Initializes the "train" data
    yvec_train  = yvec(ndxtrain,:);
    
    % Computes "wvec" for the training data
    wvec = xmat_train\yvec_train;
    
    % Initalizes the "test" indexing for "xmat" and "yvec"
    xmat_test = Xmat(ndxtest,:);
    % Initializes the "test" data
    yvec_test = yvec(ndxtest,:);

    rmstrain(ix) = sqrt(mean((yvec_train - xmat_train*wvec).^2))*var;
    rmstest(ix)  = sqrt(mean((yvec_test - xmat_test*wvec).^2))*var;
end

end
