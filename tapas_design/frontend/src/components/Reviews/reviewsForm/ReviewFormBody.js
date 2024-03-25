import React from "react";

const ReviewFormBody = ({ body, setBody }) => {
    return (
        <label className="review-label review-edit-form">
           Write a review
            <br />
            <textarea
                className="review-text"
                placeholder=" Tell us what you like or dislike"
                type="text"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
        </label>
    );
};

export default ReviewFormBody;
