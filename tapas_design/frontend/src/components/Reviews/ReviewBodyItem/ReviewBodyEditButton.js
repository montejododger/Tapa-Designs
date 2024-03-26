import React from "react";
import { useDispatch } from "react-redux";
import * as ReviewActions from "../../../store/reviews";

const ReviewBodyEditButton = ({ id, productId, setEditId }) => {
    const dispatch = useDispatch();

    //  if edit button is clicked it will send(boolean) back to parent component
    //  if delete button is clicked, dispatch the delete review thunk

    return (
        <div className="edit-button-container">
            <button className="edit-review" onClick={() => setEditId(id)}>
                Edit
            </button>
            <button
                className="delete-review"
                onClick={() =>
                    dispatch(ReviewActions.deleteReview(productId, id))
                }
            >
                Delete
            </button>
        </div>
    );
};

export default ReviewBodyEditButton;
