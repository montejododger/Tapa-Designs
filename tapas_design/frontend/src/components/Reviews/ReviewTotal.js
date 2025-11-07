import React from "react";
import { useSelector } from "react-redux";
import { selectAllReviews } from "../../store/reviews";

const ReviewTotal = () => {
    const allReviews = useSelector(selectAllReviews);
    const totalReview = allReviews.length;

    return <div className="review-total">{totalReview} reviews</div>;
};

export default ReviewTotal;
