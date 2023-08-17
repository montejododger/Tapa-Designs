import React from "react";
import ReviewBodyItem from "./ReviewBodyItem";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";

import "./ReviewBody.css"


const selectReviews = createSelector(
    (state) => state.reviews,
    (reviews) => Object.values(reviews)
);

function ReviewBody() {

    const reviews = useSelector(selectReviews);
    return (
        <div className="review-body-wrapper">
            {reviews.map((review) => (
                <ReviewBodyItem review={review} key={review.id} />
            ))}
        </div>
    );
}

export default ReviewBody;
