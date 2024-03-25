import React from "react";

const ReviewAuthor = ({ author }) => {
    return (
        <div className="review-author-container">
            <div className="review-author">{author}</div>
            <div className="review-verified">Verified Reviewer</div>
        </div>
    );
};

export default ReviewAuthor;
