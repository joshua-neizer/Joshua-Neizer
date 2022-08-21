import React from 'react';

import photo from './images/headshot.jpg';

export default Home => {
    return (
        <div class="info fadeA">
            <div class="image-text inner">
                <h1>Who am I?</h1>
                <p>
                    My name is Joshua Neizer. I'm a fourth year computer science student at Queen's
                    University with a specialization in Software Design.&#160; I have always had a passion
                    for creating and understanding the tools that operate “underneath the surface”.
                    Developing and implementing the programs that allow the users to interact with
                    the front-end, and not the frontend itself. I view it simply as using computers
                    to solve logical puzzles, and that's where my enthusiasm for this field of study
                    over the past 8 years originates!
                </p>
                <br />
                <div class="button">
                    <a href="https://www.instagram.com/joshuaneizer/" target="_blank" rel="noopener noreferrer">instagram</a>
                </div>
            </div>
            <div class="inner">
                <img class="image-overlay" src={photo} alt="hoco" />
            </div>
        </div>
    )
}