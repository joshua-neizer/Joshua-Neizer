import React, { Component, useState } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

var target = 0;
const mult = ["var(--colour-theme)", ""];  

function mobileNav() {
    var element = document.getElementsByClassName('responsive')[0];
    if (target == 0) {
        element.style.opacity = 1;
        element.style.visibility = "visible";
        target = 1;
    } else {
        element.style.opacity = 0;
        element.style.visibility = "hidden";
        target = 0;
    }
}

function setup(){
    switch (document.URL.split("/").slice(-1)[0]) {
        case "Home":
            return [0, 1, 1, 1];
        case "Resume":
            return [1, 0, 1, 1];
        case "Projects":
            return [1, 1, 0, 1];
        case "Contact":
            return [1, 1, 1, 0];
        default:
            return [0, 1, 1, 1];
    }
}

const TitleBar = () =>{
    const [state, setState] = useState(setup());

    React.useEffect(() => {
            document.getElementsByClassName('responsive')[0].style.height =  (document.getElementsByClassName('home')[0].clientHeight - 50) + "px";
            
      }, [], [], []);

    return (    
        <div className ="titlebar">
            <a href="javascript:void(0);" className="icon" onClick={() => {mobileNav()}}>
                <i className="fa fa-bars"></i>
            </a>
            <div className="topNav responsive" style={{}} id="myTopnav">
                <div id="navi">
                    <a href="javascript:void(0);" className="icon" onClick={() => {mobileNav()}}>
                        <i className="fa fa-bars"></i>
                    </a>
                        <Link style = {{color: mult [state [0]]}} className= "mobLink" to="Home"    onClick={() => {setState([0, 1, 1, 1]); mobileNav();}}>Home</Link>
                        <Link style = {{color: mult [state [1]]}} className= "mobLink" to="Resume"  onClick={() => {setState([1, 0, 1, 1]); mobileNav();}}>Resume</Link>
                        <Link style = {{color: mult [state [2]]}} className= "mobLink" to="Projects"onClick={() => {setState([1, 1, 0, 1]); mobileNav();}}>Projects</Link>
                        <Link style = {{color: mult [state [3]]}} className= "mobLink" to="Contact" onClick={() => {setState([1, 1, 1, 0]); mobileNav();}}>Contact</Link>
                        <a className= "mobLink" href="https://www.linkedin.com/in/joshua-neizer-395ba7140/" target="_blank">LinkedIn</a>
                </div>
            </div>
            <div className="name">Joshua Neizer</div>
            <div className="icon">&#9772;</div>
        </div>
    );
}

export default TitleBar;