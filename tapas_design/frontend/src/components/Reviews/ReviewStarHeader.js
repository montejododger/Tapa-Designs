import React from "react";
import ReviewForm from "./ReviewForm";

// TODO: GET THE AVG STAR RATING AND DISPLAY IT
// TODO: WRITE A REVIEW NEED TO BE A DROP DONW THAT TRIGGERS THE FORM

const ReviewStarHeader = () => {

    return (
        <section className="review-star-header-wrapper">
            <h1>This will be the rating and stars</h1>
            <button>WRITE A REVIEW</button>
            <ReviewForm />
        </section>
    );
};

export default ReviewStarHeader;
