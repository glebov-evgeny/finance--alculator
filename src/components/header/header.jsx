import React from "react";
import {
    NavLink
} from "react-router-dom";

function Header() {

    return (
        <header className="header">
            <div className="container">
                <NavLink to="/" className="header__link" activeClassName="active">Главная</NavLink>
                <NavLink to="/test" className="header__link" activeClassName="active">Инфо</NavLink>
            </div>
        </header>
    );
}

export { Header };