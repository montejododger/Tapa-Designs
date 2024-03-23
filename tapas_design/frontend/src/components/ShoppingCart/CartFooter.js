import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import { clearCart } from "../../store/cartItems";
import "./CartFooter.css";

const CartFooter = ({ totalItems, totalCost, toggleCart, toggleCheckout }) => {
    let itemNumber = totalItems === 1 ? "item" : "items";

    const dispatch = useDispatch();

    const handleCheckout = () => {
        dispatch(clearCart());
        toggleCart();
        toggleCheckout();
    };

    return (
        <div className="cart-footer-wrapper">
            <div className="footer-subtotal">
                <div className="sub-label">
                    <span className="sub-span">
                        Subtotal ({totalItems} {itemNumber})
                    </span>
                </div>
                <div className="subtotal-amount,">${totalCost}.00</div>
            </div>
            <div className="fly-actions">
                <button className={"checkout-button"} onClick={handleCheckout}>
                    <span className="checkout-span">
                        <FontAwesomeIcon icon={faLock} className="lock-icon" />
                        {" Checkout "}
                    </span>
                </button>
                <button className="cart-cont-shopping" onClick={toggleCart}>
                    <Link to="/products">
                        <span>Continue Shopping</span>
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default CartFooter;
