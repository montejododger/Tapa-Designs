import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation() {
    const sessionUser = useSelector((state) => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = <ProfileButton user={sessionUser} />;
    } else {
        sessionLinks = (
            <>
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </>
        );
    }

    return (
        <>
            <div className="header-container">
                <div className="navbar-top">
                    <p className="shipping">Free U.S. Shipping on $200+ | Free U.S. Exchanges</p> 
                </div>
                <nav className="navbar">
                    <div className="navbar-left">
                        <img
                            src="https://topodesigns.com/cdn/shop/files/topo_designs_logo_vertical-logo.svg?v=1652876766858419023"
                            alt="Logo"
                            className="logo"
                        />
                    </div>
                    <div className="navbar-middle">
                        <div className="dropdown">Mens</div>
                        <div className="dropdown">Womens</div>
                        <div className="dropdown">Accessories</div>
                    </div>
                    <div className="navbar-right">
                        <ul>
                            <li>
                                <NavLink exact to="/">
                                    Home
                                </NavLink>
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
{
    /* <div className="header-container">
<div className="shipping-container">

</div>
<div className="nav-container">
    <div className="logo-container">
        <img src="https://topodesigns.com/cdn/shop/files/topo_designs_logo_vertical-logo.svg?v=1652876766858419023" alt="" />
    </div>
    <div className="menu-container">
        <ul>
            <li>
                <p>Mens</p>
            </li>
            <li>
                <p>Womens</p>
            </li>
            <li>
                <p>Accessory</p>
            </li>
        </ul>
    </div>
    <div className="credentials-container">
        <ul>
            <li>
                <NavLink exact to="/">
                    Home
                </NavLink>
                {sessionLinks}
            </li>
        </ul>
    </div>
</div>
</div> */
}
