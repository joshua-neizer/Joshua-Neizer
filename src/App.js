import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import TitleBar from './TitleBar.js'
import MobileBar from './mobileTitleBar'
import Home from './home';
import Resume from './resume';
import Contact from './contact';
import WPComp from './wpComp';
import useWindowSize from './windowDimensions';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

function getTitleBar(width){
  return (width < 1800 ?  <MobileBar/> : <TitleBar/>) ; 
}
console.log();
function App (){

    const titleBar = getTitleBar(useWindowSize().width)
    

    return (
      <BrowserRouter>
        <div id="home" className="home">
          {titleBar}
          <WPComp/>
          <Switch>
            <Route path="/Home">
              <div className="intro fade">Hi I'm Josh, nice to meet you!</div>
            </Route>
            <Route path="/Resume">
            <div className="intro fade">
              <div className="resume">RESUME</div>
              <br/>
              <div className="button button-resume">
                <a href="./images/Joshua Neizer Resume.pdf" target="_blank" download>Download</a>
              </div>
            </div>
            </Route>
            <Route path="/Contact">
              <div className="intro fade">Contact Information</div>
            </Route>
          </Switch>
        </div>
        <div className="container fade">
        <Switch>
          <Route path="/Home">
            <Home/>
          </Route>
          <Route path="/Resume">
            <Resume/>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
        </Switch>
        </div>     
      </BrowserRouter>
    );
  }





export default App;
