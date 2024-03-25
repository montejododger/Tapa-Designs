import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import StarAvg from "./StarAvg";
import ReviewAverage from "./ReviewAvg";
import ReviewTotal from "./ReviewTotal";


const ReviewStarHeader = () => {
    const [isReviewFormnVisible, setReviewFormVisable] = useState(false);
    const hadnleWriteReviewClick = () => {
        setReviewFormVisable(!isReviewFormnVisible);
    };

    return (
        <section className="review-star-header-wrapper">
            <div className="review-scores">
                <ReviewAverage />
                <div className="star-stats">
                    <StarAvg/>
                    <div className="review-total-container">
                        Based on <ReviewTotal />
                    </div>
                </div>
            </div>
            <div className="write-review">
                <button
                    className="review-button"
                    onClick={hadnleWriteReviewClick}
                >
                    Write A Review
                </button>
                <br />
                <br />
                {isReviewFormnVisible && <ReviewForm />}
            </div>
        </section>
    );
};

export default ReviewStarHeader;
