import React from "react";
import Logo from "../assets/CrownManagementLogo.png";
import "../styles/navBar.css";

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="logo"> <img src={Logo} alt="logo" /> </div>

            <div className="options">
            <button className="navButton">Home</button>
            <button className="navButton">About</button>
            <button className="navButton">Contact</button>
            </div>
            {/* change this section to change the button incase they are logged in or not */}
            <div className="logIn">
                <button className="logButton">Login</button>
            </div>
        </div>
    );
    }

export default NavBar;