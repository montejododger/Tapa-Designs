import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import Header from "./Header";
import NavLogo from "./NavLogo";
import NavBarLinks from "./NavBarLinks";
import NavBarCart from "./NavBarCart";
import SearchBar from "./SearchBar";

import "./Navigation.css";

// TODO: Move session links to header

function Navigation() {
    const sessionUser = useSelector((state) => state.session.user);

    let sessionLinks;

    if (sessionUser) {
        sessionLinks = <ProfileButton user={sessionUser} />;
    } else {
        sessionLinks = (
            <>
                <NavLink to="/login" className="login-links">
                    <p>Join / Sign In</p>
                </NavLink>
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="nav-header-wrapper">
                <div className="navleft-wrapper">
                    <NavLogo />
                    <NavBarLinks />
                </div>
                <div className="nav-right-inner">
                    <SearchBar />
                    <p>{sessionLinks}</p>
                    <div className="nav-carty">
                        <NavBarCart />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navigation;
