import React from 'react';


import html_icon from './images/html-icon.png';
import AI_icon from './images/AI-icon.webp';
import java_icon from './images/java-icon.webp';
import project_icon from './images/project-icon.png';
import MLDoc from './documents/a3_20104131.pdf';
import assembly_lab from './documents/assembly_language_lab.s';

export default (props) => {

  return (
    <div class="project-gallery">
        <div class="project-card">
            <a href="http://192.168.2.44/.API/" target="_blank">
                <div class="project PA">
                    <img class="project-icon" src={html_icon}/>
                    <div class="project-title">Rest API</div>
                </div>
            </a>
        </div>
        <div class="project-card">
            <a href="http://192.168.2.44/" target="_blank">
                <div class="project PB">
                    <img class="project-icon" src={AI_icon}/>
                    <div class="project-title">Lyric Generation AI</div>
                </div>
            </a>
        </div>
        <div class="project-card">
            <a href="http://192.168.2.44/.MLApp/" target="_blank">
                <div class="project PC">
                    <img class="project-icon" src={AI_icon}/>
                    <div class="project-title">Dog Breed Analyzer</div>
                </div>
            </a>
        </div>
        <div class="project-card">
            <a href="https://github.com/joshua-neizer/MTOptimizer/blob/master/MTOptimizer.java" target="_blank">   
                <div class="project PD">
                    <img class="project-icon" src={java_icon}/>
                    <div class="project-title">MT Optimizer</div>
                </div>
            </a>
        </div>
        <div class="project-card">
            <a href={MLDoc} target="_blank">
                <div class="project PE">
                    <img class="project-icon" src={project_icon}/>
                    <div class="project-title">ML Paper</div>
                </div>
            </a>
        </div>
        <div class="project-card">
            <a href={assembly_lab} target="_blank">
                <div class="project PF">
                    <img class="project-icon" src={html_icon}/>
                    <div class="project-title">Assembly Language</div>
                </div>
            </a>
        </div>
    </div>
  )
}