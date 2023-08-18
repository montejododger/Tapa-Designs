import React, { useState } from "react";
import { useDispatch } from "react-redux";
import StarRating from "./StarRating";
import * as ReviewActions from "../../store/reviews";

import "./ReviewFormEdit.css";

function ReviewEditForm({ review, onFinishEdit }) {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(review.title);
    const [body, setBody] = useState(review.body);
    const [rating, setRating] = useState(review.rating);

    const handleSubmit = (e) => {
        e.preventDefault();
        const editedReview = {
            id: review.id,
            title: title,
            body: body,
            rating: rating,
        };
        dispatch(ReviewActions.updateReview(review.productId, editedReview));
        onFinishEdit();
    };

    return (
        <>
            <div className="review-author-container edit-author">
                <div className="review-author">{review.author}</div>
                <div className="review-verified">Verified Reviewer</div>
            </div>
            <div className="stars-titles-edit-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="stars-titles-edit-container">
                        <div className="edit-stars-container">
                            <div>Adjust Rating</div>
                            <StarRating
                                className="review-body-stars"
                                rating={rating}
                                setRating={setRating}
                            />
                        </div>
                        <div className="review-edit-title">
                            <div>Edit Headline</div>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                    </div>
                    <textarea
                        className="edit-review-text"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                    <div className="edit-buttons">
                        <button type="submit">Submit</button>
                        <button onClick={onFinishEdit}>Cancel</button>
                    </div>
                </form>
            </div>
        </>
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
