import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"



function Header() {
    return (
        <nav>
            <NavLink activeClassName="active" to="/BestBook">BestBook</NavLink>
            <NavLink  activeClassName="active" to="/About">About Us</NavLink>
            <button ClassName="btn">Log in</button><button>Log out</button>
        </nav>

        );
}


export default Header;