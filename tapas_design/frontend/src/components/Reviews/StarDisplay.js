import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const StarDisplay = ({ rating }) => {
    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const starValue = i + 1;
                return (
                    <span key={i}>
                        {starValue <= rating ? (
                            <AiFillStar color="red" />
                        ) : (
                            <AiOutlineStar color="red" />
                        )}
                    </span>
                );
            })}
        </div>
    );
};

export default StarDisplay;
