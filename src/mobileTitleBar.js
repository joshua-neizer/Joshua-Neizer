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

const TitleBar = () =>{
    const [nav, setNav] = useState(document.URL.split("/").slice(-1)[0]);

    var navButtons = [];

    React.useEffect(() => {
            document.getElementsByClassName('responsive')[0].style.height =  (document.getElementsByClassName('home')[0].clientHeight - 50) + "px";
            
      }, [], [], []);


    const createNav = (destination) => {
        return(<Link style = {{color: mult[nav === destination ? 0 : 1]}} className= "mobLink" to={destination} onClick={() => {setNav(destination); mobileNav();}}>{destination}</Link>)
    }

    for (var destination of ["Home", "Resume", "Portfolio", "Contact"]){
        navButtons.push(createNav(destination))
    }

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
                        {navButtons}
                        <a className= "mobLink" href="https://www.linkedin.com/in/joshua-neizer-395ba7140/" target="_blank">LinkedIn</a>
                </div>
            </div>
            <div className="name">Joshua Neizer</div>
            <div className="icon">&#9772;</div>
        </div>
    );
}

export default TitleBar;