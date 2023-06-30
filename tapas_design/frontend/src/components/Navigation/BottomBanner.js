import React from "react";
import { LinkedInIcon, GithubIcon } from "../products/ContactIcons";
import "./BottomBanner.css";

function BottomBanner() {
    return (
        <footer className="bottom-wrapper">
            <div className="bottom-sale-container">
                <h2 className="bottom-title">SIGN UP & SAVE</h2>
                <p className="bottom-body">
                    Sign up and stay up to date on all the latest news from Topo
                    Designs and best of all, you'll get 15% off!
                </p>
            </div>
            <div className="black-bottom-wrapper">
                <div className="contact-container">
                    <LinkedInIcon
                        url={`https://www.linkedin.com/in/matthew-montejo-640905239/`}
                    />

                    <GithubIcon url={`https://github.com/montejododger`} />
                </div>
            </div>
        </footer>
    );
}

export default BottomBanner;
