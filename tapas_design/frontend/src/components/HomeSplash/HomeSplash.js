import React from "react";
import Splash from './splash-home.png'

function HomeSplash() {
    return (
        <div className="splash-container">
            <img src={Splash} alt="front-splash" className="splash-img"/>
        </div>
    );
}

export default HomeSplash;
