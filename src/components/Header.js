import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"

function Header() {
    return (
        <nav>
            <NavLink exact activeClassName="active" to="/">
            BestBook
            </NavLink>
            <NavLink activeClassName="active" to="/About">
            About Us
            </NavLink>
        </nav>
        );
}
export default Header;