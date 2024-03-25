import React from "react";

const ReviewFormHeadline = ({title, setTitle}) => {
    return (
        <label className="review-headline">
            Add a headline
            <br />
            <input
                className="review-headline-input"
                type="text"
                placeholder="Summerize your experience"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </label>
    );
};

export default ReviewFormHeadline;
