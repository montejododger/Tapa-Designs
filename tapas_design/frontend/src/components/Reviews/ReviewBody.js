import React from "react";
// import ReviewBodyItem from "./ReviewBodyItem";
import ReviewBodyContainer from "./ReviewBodyItem/ReviewBodyContainer";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";

import "./ReviewsCss/ReviewBody.css";

const selectReviews = createSelector(
    (state) => state.reviews,
    (reviews) => Object.values(reviews)
);

const ReviewBody = () => {
    const reviews = useSelector(selectReviews);
    const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

    return (
        <div className="review-body-wrapper">
            {sortedReviews.map((review) => (
                <ReviewBodyContainer review={review} key={review.id} />
            ))}
        </div>
    );
};

export default ReviewBody;
