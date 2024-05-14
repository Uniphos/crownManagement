import React from "react";
import { useState, useEffect } from "react";
import Layout from"../components/layout"
import "../styles/homePage.css";
import Cards from "../components/cards";
import BottomInfo from "../components/bottomInfo";

const HomePage = () => {


    return (
            <Layout>
                <div className="homePage-body">
                    <div className="homePage-main">
                        <div className="homePage-options">
                            <h1>Welcome to Crown Management</h1>
                            <p>Select what insurence your looking for</p>
                            <Cards />
                        </div>

                        <div className="homePage-image">
                                <img src="https://media.istockphoto.com/id/1215369487/photo/happy-extended-family-having-fun-during-family-lunch-in-dining-room.jpg?s=1024x1024&w=is&k=20&c=Bz9AWZMzX9bnOiWmMn59Z929k4p2BahfMaqvmVByC3s=" />
                        </div>
                    </div>
                    <div className="homePage-Extra">
                        <BottomInfo />
                    </div>
                </div>
            </Layout>
    )
}

export default HomePage;