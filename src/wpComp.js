import React, { useState } from 'react';
import * as Filter from './filterColour'

import WP1 from './images/photo-1493397212122-2b85dda8106b.jfif';
import WP2 from './images/1lie81kf9w831.jpg';
import WP3 from './images/9hgan8ehx2211.jpg';
import WP4 from './images/MTU3MzgzNTMzOTA2Njk5NDY2.jpg';

function changeWP(photo){
    document.getElementById("home").style.backgroundImage= "url(" + photo  + ")";
}

function changeTheme(colour){
    document.documentElement.style.setProperty('--colour-theme', colour);
    document.documentElement.style.setProperty('--filter-theme', Filter.convert(colour));
}

const Themes = {
    themeA: ["#f5deb3", "#ECEBE4", "#CC998D", "#153B50", "#A89F68"],
    themeB: ["#BCE7FD", "#B0DB43", "#12EAEA", "#DB2763", "#C492B1"],
    themeC: ["#EEF1EF", "#7D98A1", "#F4D6CC", "#F4B860", "#A9B4C2"],
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