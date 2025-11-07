import React from "react";
// import ReviewBodyItem from "./ReviewBodyItem";
import ReviewBodyContainer from "./ReviewBodyItem/ReviewBodyContainer";
import { useSelector } from "react-redux";
import { selectAllReviews } from "../../store/reviews";

import "./ReviewsCss/ReviewBody.css";

//  grabs the reviews from the state and memo's them
//  sorts them by newest to oldest
// </s>ends each of these reviews to the ReviewBodyContainer Component

const ReviewBody = () => {
    const reviews = useSelector(selectAllReviews);
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
