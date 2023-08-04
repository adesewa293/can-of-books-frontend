import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";



function Header() {
    return (
        <nav>
            <NavLink activeClassName="active" to="/">Home</NavLink>
            <NavLink  activeClassName="active" to="/AboutUs">About Us</NavLink>
            <LoginButton />
            <LogoutButton />
        </nav>

        );
}


export default Header;