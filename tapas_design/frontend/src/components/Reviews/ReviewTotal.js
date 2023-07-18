import React from "react";
import { useSelector } from "react-redux";

const ReviewTotal = () => {
    const allReviews = useSelector((state) => state.reviews);
    const totalReview = Object.keys(allReviews).length

    return <div>{totalReview} Reviews</div>;
};

export default ReviewTotal;
