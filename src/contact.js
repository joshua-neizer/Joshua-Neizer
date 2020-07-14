import React from 'react';

import email_icon from './images/mail-icon.png';
import phone_icon from './images/phone-icon.png';
import home_icon from './images/home-icon.png';

export default (props) => {
  return (
    <div class="fadeA">
        <div class="container-A">
            <div class="box-in email">
                <div class="icon-container">
                    <img class="icy" src={email_icon}/>
                </div>
                <div class="title">email</div>
                <div class="contact-text">joshua.neizer@gmail.com</div>
            </div> 
        </div>
        <div class="container-A">
            <div class="box-in phone">
                <div class="icon-container">
                    <img class="icy" src={phone_icon}/>
                </div>
                <div class="title">phone</div>
                <div class="contact-text">(416)-669-4607</div>
            </div> 
        </div>
        <div class="container-A">
            <div class="box-in house">
                <div class="icon-container">
                    <img class="icy" src={home_icon}/>
                </div>
                <div class="title">home</div>
                <div class="contact-text">Oakville, Ontario</div>
            </div> 
        </div>
    </div>
  )
}