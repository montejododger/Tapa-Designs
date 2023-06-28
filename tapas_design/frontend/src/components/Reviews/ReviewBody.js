import React from "react";
import ReviewBodyItem from "./ReviewBodyItem";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";


const selectReviews = createSelector(
    (state) => state.reviews,
    (reviews) => Object.values(reviews)
);

function ReviewBody() {

    const reviews = useSelector(selectReviews);
    return (
        <section className="review-body-wrapper">
            {reviews.map((review) => (
                <ReviewBodyItem review={review} key={review.id} />
            ))}
        </section>
    );
}

export default ReviewBody;
