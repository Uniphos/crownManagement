import React from "react";
import Logo from "../assets/CrownManagementLogo.png";
import "../styles/navBar.css";
import { Link } from "react-router-dom";

const NavBar = (location) => {
    const handleButton = (event) => {
        window.location =  event.target.id === "/" ? "/" : "/" + event.target.id;
    }

    return (
        <div className="navBar">
            <div className="logo"> <img src={Logo} alt="logo" /> </div>

            <div className="options">
            <button className="navButton" id="/" onClick={handleButton}>Home</button>
            <button className="navButton" id="about" onClick={handleButton}>About</button>
            <button className="navButton" id="contact" onClick={handleButton}>Contact</button>
            </div>
            {/* change this section to change the button incase they are logged in or not */}
            <div className="logIn">
                <button className="logButton" id="login" onClick={handleButton}>Login</button>
            </div>
        </div>
    );
    }

export default NavBar;