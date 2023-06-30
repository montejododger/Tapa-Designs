import React from "react";
import { NavLink } from "react-router-dom";

const NavLogo = () => {
    const logoUrl = "https://tapadesigns.s3.us-west-1.amazonaws.com/Misc/topo-designs-logo-vertical.svg"

    return (
        <div className="logo-wrapper">
            <NavLink exact to="/">
                <img src={logoUrl} alt="logo" />
            </NavLink>
        </div>
    );
};
export default NavLogo;
