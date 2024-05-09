import React from "react";
import { useState, useEffect } from "react";
import "../styles/bottomInfo.css";
import gImg from "../assets/Screenshot 2024-05-09 025711.png"
import hImg from "../assets/Screenshot 2024-05-09 032408.png"

const BottomInfo = () => {
    return (
        <div className="bottomInfo-body">
            <br />
            
            <h1>Why Crown Management?</h1>
            <p>Our goal is to provide you with the best insurance options for your needs. We work with you to find the best coverage for your budget. We are here to help you with any questions you may have. Our team is dedicated to providing you with the best service possible.</p>
            <br />
            <br />
            <div className="bottomInfo-owners">
                <div className="ownerOne">
                    <img src={gImg} alt="family" />
                </div>

                <div className="ownerTwo">
                    <img src={hImg} alt="family" />
                </div>
            </div>
        </div>
    )
}

export default BottomInfo;