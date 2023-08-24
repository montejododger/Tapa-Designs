import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";
import CartIndex from "../ShoppingCart/CartIndex";
import { useSelector } from "react-redux";
// import CartFooter from "../ShoppingCart/CartFooter";

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
                    <h5 className="side-cart-head-title">YOUR CART</h5>
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
                    <div className="shopping-cart-flyout">
                        <div className="cart-flyout-announcement">
                            Create an account and spend $250 per rolling year to
                            become a VIP and earn 2 points per $1 spent, Free
                            U.S. Shipping & Returns, and more.
                        </div>
                        <CartIndex toggleCart={toggleCart} />
                    </div>
                ) : (
                    // If user is not logged in
                    <div className="cart-login-message">
                        <div className="cart-flyout-announcement">
                            Create an account and spend $250 per rolling year to
                            become a VIP and earn 2 points per $1 spent, Free
                            U.S. Shipping & Returns, and more.
                        </div>
                        <p className="account-links">
                            Please <a href="/login">log in</a> or{" "}
                            <a href="/signup">sign up</a> to view your cart.
                        </p>
                        <div className="flyout-empty-cart-msg">
                            <h4 className="empty-cart-notice">
                                Your cart is empty!
                            </h4>
                            <p className="add-favorites">
                                Add your favorite items to your cart.
                            </p>
                            <div className="cart-shop-now">
                                <Link to="/products" onClick={toggleCart}>
                                    <p>Shop Now</p>
                                </Link>
                            </div>
                        </div>
                        <div className="empty-cart-footer"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBarCart;
