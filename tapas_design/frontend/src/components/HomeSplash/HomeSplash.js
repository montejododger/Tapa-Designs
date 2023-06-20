import React from "react";
import Splash from './splash-home.png'
import './HomeSplash.css'

function HomeSplash() {
    return (
        <div className="splash-container">
            <img src={Splash} alt="front-splash" className="splash-img"/>
        </div>
    );
}

export default HomeSplash;
