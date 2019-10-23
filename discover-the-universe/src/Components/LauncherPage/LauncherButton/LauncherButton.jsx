import React, { Component } from 'react';
import './LauncherButton.css'


class LauncherButton extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <img class="moon rotating" src="/images/moon.png" />
                    <img class="skyNight" src="/images/skyNight.jpg" />
                    <button className="launcher-btn">Get Started</button>
                </div>
               
            </div>
            )
    }
}

export default LauncherButton;