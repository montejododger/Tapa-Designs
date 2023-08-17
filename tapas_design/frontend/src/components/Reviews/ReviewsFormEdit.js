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
        <div className="review-edit-wrapper">
            <div className="review-author-container">
                <div className="review-author">{review.author}</div>
                <div className="review-verified">Verified Reviewer</div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="stars-titles-edit-wrapper">
                    <p>Adjust Rating</p>
                    <div className="stars-titles-edit-container">
                        <StarRating
                        className="review-body-stars"
                        rating={rating} setRating={setRating} />
                        <div className="review-edit-title">
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                    </div>
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                    <button onClick={onFinishEdit}>Cancel</button>
                </div>
            </form>
        </div>
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
