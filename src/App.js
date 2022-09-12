import React from 'react';
import './App.css';
import TitleBar from './TitleBar.js'
import MobileBar from './mobileTitleBar'
import Home from './home';
import Resume from './resume';
import Contact from './contact';
import Portfolio from './portfolio';
import WPComp from './wpComp';
import useWindowSize from './windowDimensions';
import resume_pdf from './images/Joshua_Neizer_Resume.pdf'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import github_icon from './images/github-icon.webp';

function getTitleBar(width) {
    return (width < 1800 ? <MobileBar /> : <TitleBar />);
}

function App() {
    const titleBar = getTitleBar(useWindowSize().width)


    return (
        <BrowserRouter>
            <div id="home" className="home">
                {titleBar}
                <WPComp />
                <Switch>

                    <Route path="*/Home">
                        <div className="intro fade">Hi I'm Josh, nice to meet you!</div>
                    </Route>
                    <Route path="*/Resume">
                        <div className="intro fade">
                            <div className="resume">RESUME</div>
                            <br />
                            <div className="button button-resume">
                                <a href={resume_pdf} target="_blank" download>Download</a>
                            </div>
                        </div>
                    </Route>
                    <Route path="*/Portfolio">
                        <div className="intro fade">
                            <div class="project-header">Project Portfolio</div>
                            <br />
                            <a href="https://github.com/joshua-neizer" target="_blank" rel="noopener noreferrer">
                                <div class="github-cont">
                                    <div class="github-bg">
                                        <img class="github" src={github_icon} alt="GitHub" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </Route>
                    <Route path="*/Contact">
                        <div className="intro fade">Contact Information</div>
                    </Route>
                    <Route path="/">
                        <div className="intro fade">Hi I'm Josh, nice to meet you!</div>
                    </Route>
                </Switch>
            </div>
            <div className="container fade">
                <Switch>
                    <Route path="*/Home">
                        <Home />
                    </Route>
                    <Route path="*/Resume">
                        <Resume />
                    </Route>
                    <Route path="*/Contact">
                        <Contact />
                    </Route>
                    <Route path="*/Portfolio">
                        <Portfolio />
                    </Route>
                    <Route path="*/*">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}





export default App;
