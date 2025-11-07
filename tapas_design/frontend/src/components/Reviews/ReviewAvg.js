import React from "react";
import { useSelector } from "react-redux";
import { selectAllReviews } from "../../store/reviews";

const ReviewAverage = () => {
    const reviews = useSelector(selectAllReviews);
    const ratings = reviews.map((review) => review.rating);

    if (ratings.length === 0) {
        return <p>No reviews yet</p>;
    }

    const averageRating =
        ratings.reduce((total, num) => total + num, 0) / ratings.length;

    return (
        <div className="review-avg">
            <p>{averageRating.toFixed(1)}</p>
        </div>
    );
};

export default ReviewAverage;
