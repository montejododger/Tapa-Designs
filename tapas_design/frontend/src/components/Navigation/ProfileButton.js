
import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import CartIndex from "../ShoppingCart/CartIndex";

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const [cartShow, setCartShow] = useState(false);
    const dropdownRef = useRef(null);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const toggleCart = () => {
        setCartShow(!cartShow);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <div className="session-wrapper">
            <div className="sessions-container">
                <button onClick={toggleMenu}>DropDown</button>
                {showMenu && (
                    <ul className="profile-dropdown" ref={dropdownRef}>
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