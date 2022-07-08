import React from "react";
import {
    NavLink
} from "react-router-dom";

function Header() {

    return (
        <header className="header">
            <nav className="header__nav">
                <NavLink to="/" className="header__link" activeclassname="active">Главная</NavLink>
                <NavLink to="/test" className="header__link" activeclassname="active">Инфо</NavLink>
            </nav>
        </header>
    );
}

export { Header };