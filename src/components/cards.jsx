import React  from "react";
import "../styles/card.css";

const Cards = () => {
    const data = ["Auto Insurence", "Life Insurence", "Liability", "Professional", "Workers Comp"];
    return (
        <div className="card-container">
            {data.map((item, index) => {
                return (
                    <div className="card" key={index}>
                        <div className="card-title">{item}</div>
                        <div className="card-content">
                            <p>Content</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards;