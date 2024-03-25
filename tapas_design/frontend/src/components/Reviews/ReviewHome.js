import React from "react";
import ReviewBody from "./ReviewBody";
import ReviewStarHeader from "./ReviewStarHeader";
import ReviewHeader from "./ReviewHeader";

import "./ReviewsCss/Reviews.css";

const ReviewHome = () => {
    return (
        <section className="review-wrapper">
            <ReviewHeader />
            <ReviewStarHeader />
            <ReviewBody />
        </section>
    );
};

export default ReviewHome;
