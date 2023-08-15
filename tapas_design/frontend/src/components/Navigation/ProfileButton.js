import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import CartIndex from "../ShoppingCart/CartIndex";

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const [cartShow, setCartShow] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };
    const toggleCart = () => {
        // debugger
        setCartShow(!cartShow);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener("click", closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    // TODO: either have a button with an onclick or have the component do that and import it
    return (
        <div className="session-wrapper">
            <div className="sessions-container">
                <button onClick={openMenu}>DropDown</button>
                {showMenu && (
                    <ul className="profile-dropdown">
                        <li>{user.username}</li>
                        <li>{user.email}</li>
                        <li>
                            <button onClick={logout}>Log Out</button>
                        </li>
                    </ul>
                )}
            </div>
            <div className="cart-container">
                <button onClick={toggleCart}> CART</button>
                {cartShow && <CartIndex />}
            </div>
        </div>
    );
}

export default ProfileButton;
