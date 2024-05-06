import React from "react";
import { useState, useEffect } from "react";
import Layout from"../components/layout"
import "../styles/homePage.css";

const HomePage = () => {
    

    return (
            <Layout>
                <div className="homePage-body">
                    <div className="homePage-main">
                        <div className="homePage-options">
                            <h1>Welcome to Crown Management</h1>
                            <p>At Crown Management, we believe that every family deserves a home. We are dedicated to helping you find the perfect home for you and your family. Our team of experts will work with you to find a home that fits your needs and your budget. Whether you are looking to buy, rent, or sell, we are here to help. Contact us today to get started!</p>
                        </div>

                        <div className="homePage-image">
                                <img src="https://media.istockphoto.com/id/1215369487/photo/happy-extended-family-having-fun-during-family-lunch-in-dining-room.jpg?s=1024x1024&w=is&k=20&c=Bz9AWZMzX9bnOiWmMn59Z929k4p2BahfMaqvmVByC3s=" />
                        </div>
                    </div>
                </div>
            </Layout>
    )
}

export default HomePage;