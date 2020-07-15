import React, { useState } from 'react';
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
            return [0, 1, 1];
        case "Resume":
            return [1, 0, 1];
        case "Contact":
            return [1, 1, 0];
        default:
            return [0, 1, 1];
    }
}

const TitleBar = () =>{
    const [state, setState] = useState(setup());
    return (    
        <div className ="titlebar">
            <a href="javascript:void(0);" className="icon" onClick={() => {mobileNav()}}>
                <i className="fa fa-bars"></i>
            </a>
            <div className="topNav responsive" id="myTopnav">
                <div id="navi">
                    <a href="javascript:void(0);" className="icon" onClick={() => {mobileNav()}}>
                        <i className="fa fa-bars"></i>
                    </a>
                        <Link style = {{color: mult [state [0]]}} className= "mobLink" to="Home">Home</Link>
                        <Link style = {{color: mult [state [1]]}} className= "mobLink" to="Resume">Resume</Link>
                        <Link style = {{color: mult [state [2]]}} className= "mobLink" to="Contact">Contact</Link>
                        <a className= "mobLink" href="https://www.linkedin.com/in/joshua-neizer-395ba7140/" target="_blank">LinkedIn</a>
                        <a className= "mobLink" href="https://github.com/Vos2" target="_blank">GitHub</a>
                </div>
            </div>
            <div className="name">Joshua Neizer</div>
            <div className="icon">&#9772;</div>
             {/* <a href="javascript:void(0);" class="icon" onclick="mobileNav()">
                <i class="fa fa-bars"></i>
            </a>
            <div className="nav">
                <button className={mult [state [0]]} type="button" onClick={() => {setState([0, 1, 1]); console.log(state);}}>
                    <Link className= "link" to="Home">Home</Link>
                </button>
                <button className={mult [state [1]]} type="button" onClick={() => {setState([1, 0, 1]); console.log(state);}}>
                    <Link className= "link" to="Resume">Resume</Link>
                </button>
                <button className={mult [state [2]]} type="button" onClick={() => {setState([1, 1, 0]); console.log(state);}}>
                    <Link className= "link" to="Contact">Contact</Link>
                </button>
                <button className="box">
                    <a className= "link"  href="https://www.linkedin.com/in/joshua-neizer-395ba7140/" target="_blank">LinkedIn</a>
                </button>
                <button className="box">
                    <a className= "link" href="https://github.com/joshua-neizer" target="_blank">GitHub</a>
                </button>
            </div>
            <div className="name">Joshua Neizer</div>
            <div className="icon">&#9772;</div> */}
        </div>
    );
}

export default TitleBar;