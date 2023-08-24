import React from "react";
import { Link } from "react-router-dom/";

const NavBarLinks = () => {
    return (
        <div className="navbar-links-wrapper">
            <div className="navbar-links-container">
                <ul className="navbar-ul-container menu">
                    <li className="nav-li">
                        <Link to="/products">Collection</Link>
                    </li>
                    <li className="nav-li">
                        <Link to="/categories/mens">Men's</Link>
                    </li>
                    <li className="nav-li">
                        <Link to="/categories/womens">Women's</Link>
                    </li>
                    <li className="nav-li">
                        <Link to="/categories/accessories">Accessories</Link>
                    </li>
                    {/* <li className="nav-li">
                        <Link to="/categories/sale">Sale</Link>
                    </li> */}
                    <li className="nav-li">Future Categories</li>
                    <li className="nav-li">Future Categories</li>
                    <li className="nav-li">Future Categories</li>
                </ul>
            </div>
        </div>
    );
};

export default NavBarLinks;
