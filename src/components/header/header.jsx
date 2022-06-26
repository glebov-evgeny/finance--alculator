import React from "react";
import {
    Link
} from "react-router-dom";

function Header() {

    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="header__link">Home</Link>
                <Link to="/test" className="header__link">Test</Link>
            </div>
        </header>
    );
}

export { Header };