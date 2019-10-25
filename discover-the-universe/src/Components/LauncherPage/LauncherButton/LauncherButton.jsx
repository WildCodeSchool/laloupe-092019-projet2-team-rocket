import React, { Component } from 'react';
import './LauncherButton.css'

const stars = () => {
    const wH = window.innerHeight
    const wW = window.innerWidth

    const generateStars = n => {
    for (let i = 0; i < n; i++) {
        const div = document.createElement('div')
        div.className = i % 20 == 0 ? 'star star--big' : i % 9 == 0 ? 'star star--medium' : 'star'
        // random everywhere!
        div.setAttribute('style', `top:${Math.round(Math.random()*wH)}px;left:${Math.round(Math.random()*wW)}px;animation-duration:${Math.round(Math.random()*3000) + 3000}ms;animation-delay:${Math.round(Math.random()*3000)}ms;`)
        document.body.appendChild(div)
  }
}

}

class LauncherButton extends Component{
    render(){
        return(
            <div className="container">
                <img className="logo-title forward" src="/images/logo-title.png" />
                <img className="earth rotating-earth" src="/images/earth-1.png" />
                <img className="moon rotating" src="/images/moon.png" />
                <img className="rocket moveRocket" src="/images/rocketNotFire.png" />
                <img className="astronaute1 move" src="/images/astronaute.png" />
                <img className="skyNight" src="/images/skyNight.jpg" />
                <div className="star comet">
                {stars()}
                </div>
                
                <button className="launcher-btn">Get Started</button>
            </div>

            )
    }
}

export default LauncherButton;