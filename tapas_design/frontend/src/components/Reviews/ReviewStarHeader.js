import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import StarAvg from "./ReviewStars/StarAvg";
import ReviewAverage from "./ReviewAvg";
import ReviewTotal from "./ReviewTotal";


const ReviewStarHeader = () => {
    const [isReviewFormnVisible, setReviewFormVisable] = useState(false);

    const hadnleWriteReviewClick = () => {
        setReviewFormVisable(!isReviewFormnVisible);
    };


    //  this component is the top oif the reviews
    //  it displays the avg score numerically and in stars
    //  if write review button is clicked review form is displayed
    
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
