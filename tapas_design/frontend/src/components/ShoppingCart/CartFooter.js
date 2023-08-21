import React from "react";
import { useState } from "react";
import "./CartFooter.css"

const CartFooter = ({ totalItems, totalCost }) => {
    return (
        <div className="cart-footer-wrapper">
            <div className="footer-subtotal">
                <div className="sub-label">
                    <span>Subtotal ({totalItems})</span>
                </div>
                <div className="subtotal-amount">
                ${totalCost}.00
                </div>
                <div className="sub-amount"></div>
            </div>
            <div className="fly-actions"></div>
        </div>
    );
};

export default CartFooter;
