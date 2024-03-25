import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { LinkedInIcon, GithubIcon } from "../products/ContactIcons";
import "./Checkout.css";

const Checkout = ({ onClose }) => {

    const familyPhotoLink = `https://tapadesigns.s3.us-west-1.amazonaws.com/public_assest/IMG_1152.JPEG`

    return (
        <div className="checkout-window checkout-show">
            <div className="checkout-header">
                <h5 className="side-cart-head-title">THANK YOU!</h5>
                <div className="cart-exit-button">
                    <FontAwesomeIcon
                        icon={faTimes}
                        className="close-icon"
                        onClick={onClose}
                    />
                </div>
            </div>
            <div className="checkout-info">
                <p className="checkout-p">
                    I hope you enjoyed touring my website!
                    <br />
                    <br />
                    Checkout my socials to see my other projects or learn more
                    about me.
                </p>
                <div className="checkout-socials">
                    <LinkedInIcon
                        url={`https://www.linkedin.com/in/matthew-m-640905239/`}
                    />

                    <GithubIcon url={`https://github.com/montejododger`} />
                </div>
                <div className="checkout-img">
                    <img src={familyPhotoLink} alt="family" />
                </div>
            </div>
        </div>
    );
};

export default Checkout;
