import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const StarRating = ({ className, rating, setRating }) => {
    const [hover, setHover] = useState(0);

    let stars = [];

    for (let i = 1; i <= 5; i++) {
        stars.push(
            <label key={i}>
                <input
                    type="radio"
                    name="rating"
                    value={i}
                    onClick={() => setRating(i)}
                    style={{ display: "none" }}
                />
                {i <= (hover || rating) ? (
                    <AiFillStar
                        color="red"
                        onMouseEnter={() => setHover(i)}
                        onMouseLeave={() => setHover(0)}
                    />
                ) : (
                    <AiOutlineStar
                        color="red"
                        onMouseEnter={() => setHover(i)}
                        onMouseLeave={() => setHover(0)}
                    />
                )}
            </label>
        );
    }

    return <div className={className}>{stars}</div>;
};

export default StarRating;
