import { React } from "react";

const ReviewFormErrors = ({ errors }) => {
    return (
        <ul className="form-errors-container">
            {errors.map((error, index) => (
                <li className="review-errors" key={index}>
                    {error}
                </li>
            ))}
        </ul>
    );
};

export default ReviewFormErrors;
