import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as ReviewActions from "../../store/reviews";
import StarRating from "./StarRating";
import "./ReviewForm.css";

const ReviewForm = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();

    const [errors, setErrors] = useState([]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [rating, setRating] = useState(0);

    const currentUser = useSelector((state) => state.session.user) || null;
    const productReviews = useSelector((state) => state.reviews);

    const hasReviewed = currentUser && Object.values(productReviews).some(
        (review) => review.userId === currentUser.id
    );

    // console.log(currentUser);

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = [];

        if (!currentUser) {
            newErrors.push("Please log in or sign up to leave a review");
            localStorage.setItem("prevUrl", window.location.href);
            setErrors(newErrors);
            return;
        }

        if (title === "") {
            newErrors.push("Please add a title");
        }

        if (body === "") {
            newErrors.push("Please leave a review body");
        }

        if (rating === 0) {
            newErrors.push("A star rating is required");
        }

        if (newErrors.length > 0) {
            setErrors(newErrors);
            return;
        } else {
            // make the review object
            const review = {
                title,
                body,
                rating,
            };
            dispatch(ReviewActions.createReview(productId, review));

            // Reset the form
            setTitle("");
            setBody("");
            setRating(0);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="form-wrapper">
                <ul className="form-errors-container">
                    {errors.map((error, index) => (
                        <li className="review-errors" key={index}>
                            {error}
                        </li>
                    ))}
                </ul>
                <div className="review-score">
                    <p>Rate your experience</p>
                </div>
                <StarRating
                    className="review-form-star"
                    rating={rating}
                    setRating={setRating}
                />
                <label className="review-label review-edit-form">
                    Review
                    <br />
                    <textarea
                        className="review-text"
                        placeholder=" Tell us what you like or dislike"
                        type="text"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </label>
                <label className="review-headline">
                    Add a headline
                    <br />
                    <input
                        className="review-headline-input"
                        type="text"
                        placeholder="Summerize your experience"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <div>
                    <button
                        className="review-button"
                        value="submit"
                        disabled={hasReviewed}
                    >
                        POST
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ReviewForm;
