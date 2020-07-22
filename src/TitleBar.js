import React, { useState } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

const mult = ["box alpha", "box"];   

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
            <div className="nav">
                <button className={mult [state [0]]} type="button" onClick={() => {setState([0, 1, 1]);}}>
                    <Link className= "link" to="Home">Home</Link>
                </button>
                <button className={mult [state [1]]} type="button" onClick={() => {setState([1, 0, 1]);}}>
                    <Link className= "link" to="Resume">Resume</Link>
                </button>
                <button className={mult [state [2]]} type="button" onClick={() => {setState([1, 1, 0]);}}>
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
            <div className="icon">&#9772;</div>
        </div>

    );
}

export default TitleBar;