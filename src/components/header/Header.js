import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
    return(
        <div className="Header_container">
            <Link to="/" className="navbar-link">
                <div className="Header_logo">KIM MIN JIN</div>
            </Link>
            <div className="Header_menu">
                <Link to="/about" className="navbar-link">
                    <div className="Header_menu1">About</div>
                </Link>
                <Link to="/skills" className="navbar-link">
                    <div className="Header_menu2">Skills</div>
                </Link>
                <Link to="/projects" className="navbar-link">
                    <div className="Header_menu3">Projects</div>
                </Link>
                <Link to="/contact" className="navbar-link">
                    <div className="Header_menu4">Contact</div>
                </Link>
            </div>

        </div>
    )
}

export default Header;