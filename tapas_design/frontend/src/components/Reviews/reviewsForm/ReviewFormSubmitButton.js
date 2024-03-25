import React from "react";

const ReviewFormSubmitButton = ({hasReviewed}) => {
    return (
        <div>
            <button
                className="review-button"
                value="submit"
                disabled={hasReviewed}
            >
                POST
            </button>
        </div>
    );
};

export default ReviewFormSubmitButton;
