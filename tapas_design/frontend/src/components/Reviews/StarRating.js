import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const StarRating = ({ rating, setRating }) => {
    const [hover, setHover] = useState(0);

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const starValue = i + 1;

                return (
                    <label key={i}>
                        <input
                            type="radio"
                            name="rating"
                            value={starValue}
                            onClick={() => setRating(starValue)}
                            style={{ display: "none" }} // Hide button
                        />
                        {starValue <= (hover || rating) ? (
                            <AiFillStar
                                color="red"
                                onMouseEnter={() => setHover(starValue)}
                                onMouseLeave={() => setHover(0)}
                            />
                        ) : (
                            <AiOutlineStar
                                color="red"
                                onMouseEnter={() => setHover(starValue)}
                                onMouseLeave={() => setHover(0)}
                            />
                        )}
                    </label>
                );
            })}
        </div>
    );
};

export default StarRating;
