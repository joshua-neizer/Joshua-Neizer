import React from 'react';
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

const colours = ["#f5deb3", "#5cdb95", "#000000", "#1e90ff", "#967BB6"]





export default (props) => {
  return (
    <div>
        <script src="./filterColour.js"></script>
        <div class="chaCol">
            <div class="CS"><div class="colour" style={{backgroundColor : colours [0] }} onClick={() => {changeTheme(colours [0]);}} ></div></div>
            <div class="CS"><div class="colour" style={{backgroundColor : colours [1] }} onClick={() => {changeTheme(colours [1]);}} ></div></div>
            <div class="CS"><div class="colour" style={{backgroundColor : colours [2] }} onClick={() => {changeTheme(colours [2]);}} ></div></div>
            <div class="CS"><div class="colour" style={{backgroundColor : colours [3] }} onClick={() => {changeTheme(colours [3]);}} ></div></div>
            <div class="CS"><div class="colour" style={{backgroundColor : colours [4] }} onClick={() => {changeTheme(colours [4]);}} ></div></div>
        </div>
        <div class="chaWall">
            <div class="WPS">
                <img class="wallpaper" src={WP1} onClick={() => {changeWP(WP1);}} />
            </div>
            <div class="WPS">
                <img class="wallpaper" src={WP2} onClick={() => {changeWP(WP2);}} />
            </div>
            <div class="WPS">
                <img class="wallpaper" src={WP3} onClick={() => {changeWP(WP3);}} />
            </div>
            <div class="WPS">
                <img class="wallpaper" src={WP4} onClick={() => {changeWP(WP4);}} />
            </div>
        </div>
    </div>
  )
}