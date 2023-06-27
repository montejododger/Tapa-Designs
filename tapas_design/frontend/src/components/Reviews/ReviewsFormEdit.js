import React, { useState } from "react";
import { useDispatch } from "react-redux"; 
import StarRating from "./StarRating";
import * as ReviewActions from "../../store/reviews";

function ReviewEditForm({ review, onFinishEdit }) {
    const dispatch = useDispatch();
    const [editedReviewTitle, setEditedReviewTitle] = useState(review.title);
    const [editedReviewBody, setEditedReviewBody] = useState(review.body);
    const [editedReviewRating, setEditedReviewRating] = useState(review.rating);


    const handleSubmit = (e) => {
        e.preventDefault();
        const editedReview = {
            id: review.id,
            title: editedReviewTitle,
            body: editedReviewBody,
            rating: editedReviewRating,
        };
        dispatch(ReviewActions.updateReview(review.productId, editedReview));
        onFinishEdit();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={editedReviewTitle}
                onChange={(e) => setEditedReviewTitle(e.target.value)}
            />
            <textarea
                value={editedReviewBody}
                onChange={(e) => setEditedReviewBody(e.target.value)}
            />

            <input
                type="number"
                value={editedReviewRating}
                min="1"
                max="5"
                onChange={(e) => setEditedReviewRating(e.target.value)}
            />
            <button type="submit">Submit</button>
            <button onClick={onFinishEdit}>Cancel</button>
        </form>
    );
}

export default ReviewEditForm;

// #  id         :bigint
// #  title      :string
// #  body       :string
// #  rating     :integer
// #  user_id    :bigint
// #  product_id :bigint
// #  created_at :datetime
// #  updated_at :datetime

// TODO: : import the star thing to change rating
