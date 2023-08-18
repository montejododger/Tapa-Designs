import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";
import CartIndex from "../ShoppingCart/CartIndex";

import "./NavBarCart.css";

const NavBarCart = () => {
    const [cartShow, setCartShow] = useState(false);

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
                    <FontAwesomeIcon
                        icon={faTimes}
                        className="close-icon"
                        onClick={toggleCart}
                    />
                </div>
                <CartIndex />
            </div>
        </div>
    );
};

export default NavBarCart;
