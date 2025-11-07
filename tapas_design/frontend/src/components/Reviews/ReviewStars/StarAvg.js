import React from "react";
import { useSelector } from "react-redux";
import StarDisplay from "../ReviewStars/StarDisplay";
import { selectAllReviews } from "../../../store/reviews";

const StarAvg = () => {
    const reviews = useSelector(selectAllReviews);
    const ratings = reviews.map((review) => review.rating);

    if (ratings.length === 0) {
        return <p>No reviews yet</p>;
    }

    const averageRating =
        ratings.reduce((total, num) => total + num, 0) / ratings.length;

    return (
        <div className="star-avg">
            <StarDisplay rating={Math.round(averageRating)} />
        </div>
    );
};

export default StarAvg;
