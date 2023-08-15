import React from "react";
import { useSelector } from "react-redux";

const ReviewTotal = () => {
    const allReviews = useSelector((state) => state.reviews);
    const totalReview = Object.keys(allReviews).length

    return <div className="review-total">{totalReview} reviews</div>;
};

export default ReviewTotal;
