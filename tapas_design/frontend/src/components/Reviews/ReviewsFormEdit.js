import React, { useState } from "react";
import { useDispatch } from "react-redux"; 
import StarRating from "./StarRating";
import * as ReviewActions from "../../store/reviews";

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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <StarRating 
            rating={rating} 
            setRating={setRating}/>
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
