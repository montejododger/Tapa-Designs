import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const StarDisplay = ({ className, rating }) => {
    let stars = [];
    
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <span key={i}>
                {i <= rating ? (
                    <AiFillStar color="red" />
                ) : (
                    <AiOutlineStar color="red" />
                )}
            </span>
        );
    }
    return <div className={className}>{stars}</div>;
};


export default StarDisplay;
