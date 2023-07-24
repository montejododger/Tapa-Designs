import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import Header from "./Header";
import NavLogo from "./NavLogo";
import NavBarLinks from "./NavBarLinks";
import NavBarCart from "./NavBarCart";
import SearchBar from "./SearchBar";
import CartIndex from "../ShoppingCart/CartIndex";

import "./Navigation.css";

// TODO: Move session links to header

function Navigation() {
    const sessionUser = useSelector((state) => state.session.user);

    let sessionLinks;
    {
        /* <div className="navbar-right">{sessionLinks}</div> */
    }
    if (sessionUser) {
        sessionLinks = <ProfileButton user={sessionUser} />;
    } else {
        sessionLinks = (
            <>
                <NavLink to="/login" className="login-links">
                    Join / Sign In
                </NavLink>
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="nav-wrapper">
                <div className="navleft-wrapper">
                    <NavLogo />
                    <NavBarLinks />
                    <SearchBar/>
                    <p>{sessionLinks}</p>
                </div>
                <NavBarCart />
            </div>
        </>
    );
}

export default Navigation;
