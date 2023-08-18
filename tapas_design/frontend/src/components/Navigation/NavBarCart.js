import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const NavBarCart = () => {
    return (
        <div className="">
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
        </div>
    );
};

export default NavBarCart;
