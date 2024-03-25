import {React, useState} from "react";

const ReviewFormErrors = () => {

    const [errors, setErrors] = useState([]);

    <ul className="form-errors-container">
        {errors.map((error, index) => (
            <li className="review-errors" key={index}>
                {error}
            </li>
        ))}
    </ul>;
};

export default ReviewFormErrors;
