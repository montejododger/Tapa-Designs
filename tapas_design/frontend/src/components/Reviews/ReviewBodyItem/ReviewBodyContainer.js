import React, { useState } from "react";
import { useSelector } from "react-redux";

import ReviewEditForm from "../ReviewsFormEdit";
import ReviewAuthor from "./ReviewBodyAuthor";
import ReviewBodyStars from "./ReviewBodyStars";
import ReviewBodyEditButton from "./ReviewBodyEditButton";


const ReviewBodyContainer = ({ review }) => {

    const [editReviewId, setEditReviewId] = useState(null);

    const currentUser = useSelector((state) => state.session.user);

    // this is to show the edit review or regular view
    const handleFinishEdit = () => {
        setEditReviewId(null);
    };


    // When edit button is clicked
        //  Review edit form is loaded
        //  else
        //  Review Body is loaded
            //  if current user matches review.userId
                // show edit and delete buttons
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
                    <ReviewAuthor author={review.author} />
                    <div className="stars-titles-wrapper">
                        <ReviewBodyStars
                            title={review.title}
                            rating={review.rating}
                        />
                        <div className="review-body">{review.body}</div>
                        {currentUser && currentUser.id === review.userId && (
                            <ReviewBodyEditButton
                                id={review.id}
                                productId={review.productId}
                                setEditId={setEditReviewId}
                            />
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default ReviewBodyContainer;
