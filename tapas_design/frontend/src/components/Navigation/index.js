import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import HeaderBanner from "./HeaderBanner";
import "./Navigation.css";

function Navigation() {
    const sessionUser = useSelector((state) => state.session.user);

    let sessionLinks;

    // if a user was found use Profile Button
    // else show login sign up
    if (sessionUser) {
        sessionLinks = <ProfileButton user={sessionUser} />;
    } else {
        sessionLinks = (
            <>
                <NavLink to="/login" className="login-links">
                    Join / Sign In
                </NavLink>
                {/* <NavLink to="/signup" className="login-links">
                    Sign Up
                </NavLink> */}
            </>
        );
    }

    return (
        <>
            <div className="header-container">
                <HeaderBanner />
                <nav className="navbar">
                    <div className="navbar-left">
                        <NavLink exact to="/">
                            <img
                                src="https://topodesigns.com/cdn/shop/files/topo_designs_logo_vertical-logo.svg?v=1652876766858419023"
                                alt="Logo"
                                className="logo"
                            />
                        </NavLink>
                    </div>
                    <div className="navbar-middle">
                        <div className="dropdown">Mens</div>
                        <div className="dropdown">Womens</div>
                        <div className="dropdown">Accessories</div>
                    </div>
                    <div className="navbar-right">
                        <ul>
                            <li>
                                <Link></Link>
                                {sessionLinks}
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navigation;
