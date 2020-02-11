import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home';
import Resume from './resume';

const alpha = {
  background: 'rgba(255, 255, 255, 0.722)', 
  border: 'solid thin rgba(245, 222, 179, 1)',
  color: 'wheat',
};

const beta = {
  fontWeight: 'inherit',
};

const mult = [alpha, beta];

var focus = [0, 1, 1];

  
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      page: <Home/>,
      greeting : <HomeGreeting/>,
      }

    this.updatePage = this.updatePage
  }

  updatePage = (newPage, greet) => {this.setState({ page: newPage,
                                                    greeting : greet})}

  check = () => {
		console.log(this.state.visible);
	}     

  render(){
    const fade = this.state.fade
  return (
    <body>
      <div className="home">
        <TitleBar updatePageT={this.updatePage}/>
        {this.state.greeting}
      </div>
      <div className="container fade">
          {this.state.page}
        
      </div>      
      <br/>
    </body>
  );
  }
}


class TitleBar extends Component{

  
  render(){
    return(
      <div className ="titlebar">
        <div className="nav">
            <button className="box" style={mult [focus [0]]}  type="button" onClick={() => {this.props.updatePageT(<Home/>, <HomeGreeting/>); focus = [0, 1, 1];}}>
                <a className= "link" href="#Home">Home</a>
            </button>
            <button className="box"  style={mult [focus [1]]} type="button" onClick={() => {this.props.updatePageT(<Resume/>, <ResumeGreeting/>); focus = [1, 0, 1];}}>
                <a className= "link" href="#Resume">Resume</a>
            </button>
            <button className="box" style={mult  [focus [2]]} type="button">
                <a className= "link" href="#Contact">Contact</a>
            </button>
            <button className="box">
                <a className= "link" href="https://www.linkedin.com/in/joshua-neizer-395ba7140/" target="_blank">LinkedIn</a>
            </button>
            <button className="box">
                <a className= "link" href="https://github.com/Vos2" target="_blank">GitHub</a>
            </button>
        </div>
        <div className="name">Joshua Neizer</div>
        <div className="icon">&#9772;</div>
      </div>
    );
  }
}

class HomeGreeting extends Component{
  render(){
    return(
      <div className="intro fade">Hi I'm Josh, nice to meet you!</div>
    );
  }
}

class ResumeGreeting extends Component{
  render(){
    return(
        <div className="intro fade">
          <div className="resume">RESUME</div>
          <br/>
          <div className="button">
            <a href="./images/Joshua Neizer Resume.pdf" target="_blank" download>Download</a>
          </div>
        </div>
    );
  }
}

export default App;
