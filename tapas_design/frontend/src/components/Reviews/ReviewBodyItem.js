import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReviewEditForm from "./ReviewsFormEdit";
import StarDisplay from "./StarDisplay";
import * as ReviewActions from "../../store/reviews";

const ReviewBodyItem = ({ review }) => {
    const dispatch = useDispatch();

    const [editingReviewId, setEditingReviewId] = useState(null);

    const currentUser = useSelector((state) => state.session.user);

    // this is to show the edit review or regular view
    const handleFinishEdit = () => {
        setEditingReviewId(null);
    };
    console.log(review.id);

    console.log(review);

    return (
        <section className="review-body-container">
            {editingReviewId === review.id ? (
                <ReviewEditForm
                    review={review}
                    onFinishEdit={handleFinishEdit}
                />
            ) : (
                <>
                    <p>{review.title}</p>
                    <p>{review.body}</p>
                    <p>
                        <StarDisplay rating={review.rating} />
                    </p>
                    {currentUser && currentUser.id === review.userId && (
                        <>
                            <button
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
                            <button
                                onClick={() => setEditingReviewId(review.id)}
                            >
                                Edit
                            </button>
                        </>
                    )}
                </>
            )}
        </section>
    );
};

export default ReviewBodyItem;
