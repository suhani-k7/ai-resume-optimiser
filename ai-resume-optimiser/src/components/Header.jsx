import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () =>{
    return(
    <header className="header">
        <div className="name"> AI resume Optimiser</div>
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/add-resume">Add Resume</Link>
            <Link to="/view-resume">View Resume</Link>
        </nav>
    </header>
    );
};
export default Header;