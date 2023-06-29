import React from "react";
import { NavLink } from "react-router-dom";

const NavLogo = () => {
    const logoUrl =
        "https://topodesigns.com/cdn/shop/files/topo_designs_logo_vertical-logo.svg?v=1652876766858419023";

    return (
        <div className="logo-wrapper">
            <NavLink exact to="/">
                <img src={logoUrl} alt="logo" />
            </NavLink>
        </div>
    );
};
export default NavLogo;
