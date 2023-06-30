import React from "react";
import "./Header.css";

function Header() {


// TODO: move over session links  where span tag is

    return (
        <header className={`header-wrapper`}>
            <div className={`header-text-container`}>
                <span className="shipping-text">
                    Free U.S. Shipping on $200+ | Free U.S. Exchanges
                </span>
            </div>
            <div className="header-login-container">
                {/* <span>Join / Sign In</span> */}
            </div>
        </header>
    );
}

export default Header;
