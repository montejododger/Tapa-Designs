import React from "react";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import StarDisplay from "./StarDisplay";

const selectReviews = createSelector(
    (state) => state.reviews,
    (reviews) => Object.values(reviews)
);

const StarAvg = () => {

    const reviews = useSelector(selectReviews);
    const ratings = reviews.map((review) => review.rating);

    const averageRating =
        ratings.reduce((total, num) => total + num, 0) / ratings.length;

    return <StarDisplay rating={Math.round(averageRating)} />;
};

export default StarAvg;
