import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";
import CartIndex from "../ShoppingCart/CartIndex";
import { useSelector } from "react-redux";

import "./NavBarCart.css";

const NavBarCart = () => {
    const [cartShow, setCartShow] = useState(false);
    const currentUser = useSelector((state) => state.session.user);

    const toggleCart = () => {
        setCartShow(!cartShow);
    };

    return (
        <div className="cart-wrapper">
            <FontAwesomeIcon
                icon={faShoppingCart}
                className="cart-icon"
                onClick={toggleCart}
            />
            <div
                className={cartShow ? "overlay show" : "overlay"}
                onClick={toggleCart}
            ></div>
            <div className={cartShow ? "cart-window cart-show" : "cart-window"}>
                <div className="cart-header">
                    <h5 className="side-cart-head-title">Your Cart</h5>
                    <div className="cart-exit-button">
                        <FontAwesomeIcon
                            icon={faTimes}
                            className="close-icon"
                            onClick={toggleCart}
                        />
                    </div>
                </div>
                {currentUser ? (
                    // If user is logged in
                    <CartIndex />
                ) : (
                    // If user is not logged in
                    <div className="cart-login-message">
                        <p>
                            Please <a href="/login">log in</a> or{" "}
                            <a href="/signup">sign up</a> to view your cart.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBarCart;
