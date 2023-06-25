import React from "react";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import ReviewBody from "./ReviewBody";
import ReviewForm from "./ReviewForm";

const selectReviews = createSelector(
    (state) => state.reviews,
    (reviews) => Object.values(reviews)
);

const ReviewHome = () => {
    const reviews = useSelector(selectReviews);

    return (
        <section className="review-wrapper">
            <div className="review-title-container">
                <h3>REVIEWS & RATINGS</h3>
            </div>
            <ReviewStarHeader/>
            <ReviewForm/>
            {reviews.map((review) => (
                <ReviewBody key={review.id} review={review} />
            ))}
        </section>
    );
};

export default ReviewHome;
