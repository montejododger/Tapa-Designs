import React from "react";
import ReviewBodyItem from "./ReviewBodyItem";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";

import "./ReviewBody.css";

const selectReviews = createSelector(
    (state) => state.reviews,
    (reviews) => Object.values(reviews)
);


function ReviewBody() {
    const reviews = useSelector(selectReviews);
    const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

    return (
        <div className="review-body-wrapper">
            {sortedReviews.map((review) => (
                    <ReviewBodyItem review={review}  />
            ))}
        </div>
    );
}

export default ReviewBody;
