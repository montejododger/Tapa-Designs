import React from "react";

const ReviewFormSubmitButton = ({ hasReviewed }) => {
    return hasReviewed ? (
        <p className="already-reviewed-error">
            You've already reviewed this item.
        </p>
    ) : (
        <div>
            <button className="review-button" value="submit">
                POST
            </button>
        </div>
    );
};

export default ReviewFormSubmitButton;
