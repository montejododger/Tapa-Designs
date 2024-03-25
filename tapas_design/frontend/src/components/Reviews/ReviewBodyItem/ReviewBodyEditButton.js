import React from "react";
import { useDispatch } from "react-redux";
import * as ReviewActions from "../../../store/reviews";

const ReviewBodyEditButton = ({ id, productId, setEditId }) => {
    const dispatch = useDispatch();

    return (
        <div className="edit-button-container">
            <button
                className="edit-review"
                onClick={() => setEditId(id)}
            >
                Edit
            </button>
            <button
                className="delete-review"
                onClick={() =>
                    dispatch(
                        ReviewActions.deleteReview(productId, id)
                    )
                }
            >
                Delete
            </button>
        </div>
    );
};

export default ReviewBodyEditButton;
