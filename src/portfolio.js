import React from 'react';


import html_icon from './images/html-icon.png';
import estimate_icon from './images/estimate-icon.png'
import AI_icon from './images/AI-icon.webp';
import java_icon from './images/java-icon.webp';
import project_icon from './images/project-icon.png';
import network_icon from "./images/network-icon.png"
import MLDoc from './documents/a3_20104131.pdf';
import assembly_lab from './documents/assembly_language_lab.s';

export default () => {
    return (
        <div class="project-gallery fade">
            <div class="project-card">
                <a href="https://estimate-96507.nn.r.appspot.com/" target="_blank" rel="noopener noreferrer">
                    <div class="project PA">
                        <img class="project-icon" src={estimate_icon} />
                        <div class="project-title">EstiMate</div>
                    </div>
                </a>
            </div>
            <div class="project-card">
                <a href="https://github.com/joshua-neizer/The-Perfect-Sip" target="_blank" rel="noopener noreferrer">
                    <div class="project PB">
                        <img class="project-icon" src={html_icon} />
                        <div class="project-title">Perfect Sip</div>
                    </div>
                </a>
            </div>
            <div class="project-card">
                <a href="https://github.com/joshua-neizer/UDP-Chat-Server" target="_blank">
                    <div class="project PC">
                        <img class="project-icon" src={network_icon} />
                        <div class="project-title">UDP Chat Server</div>
                    </div>
                </a>
            </div>
            <div class="project-card">
                <a href="https://github.com/joshua-neizer/Java-RMI-Lab" target="_blank" rel="noopener noreferrer">
                    <div class="project PD">
                        <img class="project-icon" src={java_icon} />
                        <div class="project-title">RMI Lab</div>
                    </div>
                </a>
            </div>
            <div class="project-card">
                <a href={MLDoc} target="_blank" rel="noopener noreferrer">
                    <div class="project PE">
                        <img class="project-icon" src={project_icon} />
                        <div class="project-title">ML Paper</div>
                    </div>
                </a>
            </div>
            <div class="project-card">
                <a href={assembly_lab} target="_blank" rel="noopener noreferrer">
                    <div class="project PF">
                        <img class="project-icon" src={html_icon} />
                        <div class="project-title">Assembly Language</div>
                    </div>
                </a>
            </div>
        </div>
    )
}