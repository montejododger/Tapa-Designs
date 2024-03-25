import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as ReviewActions from "../../store/reviews";

import ReviewFormErrors from "./reviewsForm/ReviewFormErrors";
import ReviewFormScore from "./reviewsForm/ReviewFormScore";
import ReviewFormBody from "./reviewsForm/ReviewFormBody";
import ReviewFormHeadline from "./reviewsForm/ReviewFormHeadline";
import ReviewFormSubmitButton from "./reviewsForm/ReviewFormSubmitButton";

import "./ReviewsCss/ReviewForm.css";

const ReviewForm = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();

    const [errors, setErrors] = useState([]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [rating, setRating] = useState(0);

    const currentUser = useSelector((state) => state.session.user) || null;
    const reviews = useSelector((state) => state.reviews);

    const productReviews = Object.values(reviews);

    const hasReviewed =
        currentUser &&
        productReviews.some((review) => review.userId === currentUser.id);

    const formReset = () => {
        setTitle("");
        setBody("");
        setRating(0);
        setErrors([]);
    };

    const formErrors = () => {
        let newErrors = [];

        if (!currentUser) {
            newErrors.push("Please log in or sign up to leave a review");
            localStorage.setItem("prevUrl", window.location.href);
            setErrors(newErrors);
            return true;
        }

        if (hasReviewed) {
            newErrors.push("You've already reviewed this item.");
            setErrors(newErrors);
        }

        if (title === "") newErrors.push("Please add a title");

        if (body === "") newErrors.push("Please leave a review body");

        if (rating === 0) newErrors.push("A star rating is required");

        if (newErrors.length > 0) {
            setErrors(newErrors);
            return true;
        }

        return false;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formErrors()) return;

        const review = {
            title,
            body,
            rating,
        };

        dispatch(ReviewActions.createReview(productId, review));

        // Reset the form
        formReset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="form-wrapper">
                <ReviewFormErrors errors={errors} />
                <ReviewFormScore rating={rating} setRating={setRating} />
                <ReviewFormBody body={body} setBody={setBody} />
                <ReviewFormHeadline title={title} setTitle={setTitle} />
                <ReviewFormSubmitButton hasReviewed={hasReviewed} />
            </form>
        </div>
    );
};

export default ReviewForm;
