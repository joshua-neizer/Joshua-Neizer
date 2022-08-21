import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const mult = ["box alpha", "box"]; 

const TitleBar = () =>{
    const [nav, setNav] = useState(document.URL.split("/").slice(-1)[0]);
    var navButtons = [];

    const createNav = (destination) => {
        return (
            <button key={destination} className={mult[nav === destination ? 0 : 1]} type="button" onClick={() => setNav(destination)}>
                <Link className= "link" to={destination}>{destination}</Link>
            </button>
        )
    }
    
    for (var destination of ["Home", "Resume", "Portfolio", "Contact"]){
        navButtons.push(createNav(destination))
    }

    console.log(navButtons)

    return (    
        <div className ="titlebar">
            <div className="nav">
                {navButtons}
                <button className="box">
                    <a className= "link"  href="https://www.linkedin.com/in/joshua-neizer-395ba7140/" target="_blank">LinkedIn</a>
                </button>
            </div>
            <div className="name">Joshua Neizer</div>
            <div className="icon">&#9772;</div>
        </div>

    );
}

export default TitleBar;