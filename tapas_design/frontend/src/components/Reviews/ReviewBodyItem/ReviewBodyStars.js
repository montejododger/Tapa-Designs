import React from "react";
import StarDisplay from "../ReviewStars/StarDisplay";

const ReviewBodyStars = ({ rating, title }) => {
    return (
        <div className="stars-titles-container">
            <StarDisplay className="review-body-stars" rating={rating} />
            <div className="review-title">{title}</div>
        </div>
    );
};

export default ReviewBodyStars;
