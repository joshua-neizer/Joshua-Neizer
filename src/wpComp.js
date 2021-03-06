import React, { useState } from 'react';
import * as Filter from './filterColour'

import WP1 from './images/9hgan8ehx2211.jpg';
import WP2 from './images/1lie81kf9w831.jpg';
import WP3 from './images/11-0-Color-Day.jpg';
import WP4 from './images/MTU3MzgzNTMzOTA2Njk5NDY2.jpg';

function changeWP(photo){
    document.getElementById("home").style.backgroundImage= "url(" + photo  + ")";
}

function changeTheme(colour){
    document.documentElement.style.setProperty('--colour-theme', colour);
    document.documentElement.style.setProperty('--filter-theme', Filter.convert(colour));
}

const Themes = {
    themeA: ["#f5deb3", "#7D98A1", "#F4D6CC", "#F4B860", "#A9B4C2"],
    themeB: ["#16BAC5", "#5FBFF9", "#EFE9F4", "#171D1C", "#5863F8"],
    themeC: ["#36393B", "#A5D8FF", "#AFD0D6", "#BFB6BB", "#C49799"],
    themeD: ["#A37871", "#BEA2C2", "#BDADEA", "#4381C1", "#ACF7C1"]
}

export default (props) => {
  const [theme, setTheme] = useState(Themes.themeA);
  return (
    <div>
        <script src="./filterColour.js"></script>
        <div class="chaCol">
            <div class="CS"><div class="colour" style={{backgroundColor : theme [0] }} onClick={() => {changeTheme(theme [0]);}} ></div></div>
            <div class="CS"><div class="colour" style={{backgroundColor : theme [1] }} onClick={() => {changeTheme(theme [1]);}} ></div></div>
            <div class="CS"><div class="colour" style={{backgroundColor : theme [2] }} onClick={() => {changeTheme(theme [2]);}} ></div></div>
            <div class="CS"><div class="colour" style={{backgroundColor : theme [3] }} onClick={() => {changeTheme(theme [3]);}} ></div></div>
            <div class="CS"><div class="colour" style={{backgroundColor : theme [4] }} onClick={() => {changeTheme(theme [4]);}} ></div></div>
        </div>
        <div class="chaWall">
            <div class="WPS">
                <img class="wallpaper" src={WP1} onClick={() => {changeWP(WP1); setTheme(Themes.themeA); changeTheme(Themes.themeA [0]);}} />
            </div>
            <div class="WPS">
                <img class="wallpaper" src={WP2} onClick={() => {changeWP(WP2); setTheme(Themes.themeB); changeTheme(Themes.themeB [0]);}} />
            </div>
            <div class="WPS">
                <img class="wallpaper" src={WP3} onClick={() => {changeWP(WP3); setTheme(Themes.themeC); changeTheme(Themes.themeC [0]);}} />
            </div>
            <div class="WPS">
                <img class="wallpaper" src={WP4} onClick={() => {changeWP(WP4); setTheme(Themes.themeD); changeTheme(Themes.themeD [0]);}} />
            </div>
        </div>
    </div>
  )
}