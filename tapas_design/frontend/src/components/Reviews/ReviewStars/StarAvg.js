import React from "react";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import StarDisplay from "../ReviewStars/StarDisplay";

const selectReviews = createSelector(
    (state) => state.reviews,
    (reviews) => Object.values(reviews)
);

const StarAvg = () => {
    const reviews = useSelector(selectReviews);
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
