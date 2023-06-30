import React from "react";
import { Link } from "react-router-dom";
import "./HomeSplash.css";

function HomeSplash() {
    const splashUrl =
        "https://tapadesigns.s3.us-west-1.amazonaws.com/Misc/splashPage.png";

    return (
        <div className="splash-wrapper">
            <div className="splash-container">
                <Link to="/products">
                    <img src={splashUrl} alt="splash" />
                </Link>
            </div>
        </div>
    );
}

export default HomeSplash;
