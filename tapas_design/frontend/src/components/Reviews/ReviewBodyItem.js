import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReviewEditForm from "./ReviewsFormEdit";
import StarDisplay from "./StarDisplay";
import * as ReviewActions from "../../store/reviews";

const ReviewBodyItem = ({ review }) => {
    const dispatch = useDispatch();

    const [editReviewId, setEditReviewId] = useState(null);

    const currentUser = useSelector((state) => state.session.user);

    // this is to show the edit review or regular view
    const handleFinishEdit = () => {
        setEditReviewId(null);
    };

    return (
        <div className="review-body-container">
            {editReviewId === review.id ? (
                <ReviewEditForm
                    isEditing={true}
                    review={review}
                    onFinishEdit={handleFinishEdit}
                />
            ) : (
                <>
                    <div className="review-author-container">
                        <div className="review-author">{review.author}</div>
                        <div className="review-verified">Verified Reviewer</div>
                    </div>
                    <div className="stars-titles-wrapper">
                        <div className="stars-titles-container">
                            <StarDisplay
                                className="review-body-stars"
                                rating={review.rating}
                            />
                            <div className="review-title">{review.title}</div>
                        </div>
                        <div className="review-body">{review.body}</div>
                        {currentUser && currentUser.id === review.userId && (
                            <div>
                                <button
                                    className="edit-review"
                                    onClick={() => setEditReviewId(review.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="delete-review"
                                    onClick={() =>
                                        dispatch(
                                            ReviewActions.deleteReview(
                                                review.productId,
                                                review.id
                                            )
                                        )
                                    }
                                >
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default ReviewBodyItem;
