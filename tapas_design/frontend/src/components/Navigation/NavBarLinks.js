import React from "react";
import { NavLink, Link } from "react-router-dom/";

const NavBarLinks = () => {
    return (
        <div className="navbar-links-wrapper">
            <div className="navbar-links-container">
                <ul className="navbar-ul-container menu">
                    <li>
                        <Link to="/category/mens">Men's</Link>
                    </li>
                    <li>
                        <Link to="/category/womens">Women's</Link>
                    </li>
                    <li>
                        <Link to="/category/accessories">Accessories</Link>
                    </li>
                    <li>Future Categories</li>
                    <li>Future Categories</li>
                    <li>Future Categories</li>
                </ul>
            </div>
        </div>
    );
};

export default NavBarLinks;
