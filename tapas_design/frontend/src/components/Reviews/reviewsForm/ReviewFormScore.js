import { React } from "react";

import StarRating from "../ReviewStars/StarRating";

const ReviewFormScore = ({ rating, setRating }) => {
    return (
        <>
            <div className="review-score">
                <p>Rate your experience</p>
            </div>
            <StarRating
                className="review-form-star"
                rating={rating}
                setRating={setRating}
            />
        </>
    );
};

export default ReviewFormScore;
