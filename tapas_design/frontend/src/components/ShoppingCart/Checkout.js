import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "./Checkout.css";

const Checkout = ({ onClose }) => {


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
                <h3>Test</h3>
            </div>
        </div>
    );
};

export default Checkout;
