import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [redirect, setRedirect] = useState(false);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);

        return dispatch(
            sessionActions.signup({ email, password, firstName, lastName })
        ).then(async (res) => {
            if (res.ok) {
                // Check if signup was successful
                const prevUrl = localStorage.getItem("prevUrl");
                window.location.href = prevUrl ? prevUrl : "/"; // Navigate to the previous page, or home page if no previous page
                localStorage.removeItem("prevUrl"); // Remove the stored url after using it
            } else {
                let data = await res.json();
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            }
        });
    };

    const handleClick = (e) => {
        e.preventDefault();
        setRedirect(true);
    };
    if (redirect) {
        return <Redirect to={"/login"} />;
    }

    const welcomeMessage =
        "By creating an account you'll instantly earn 50 rewards points and gain easy access to your order status and order history.";

    return (
        <div className="signup-container">
            <form className="form-container" onSubmit={handleSubmit}>
                <ul className="error-list">
                    {errors
                        .join(",")
                        .split(",")
                        .map((error, index) => (
                            <li key={index}>
                                <span className="error-message">{error}</span>
                            </li>
                        ))}
                </ul>
                <br />
                <h6 className="signup-header">Create Your Account</h6>
                <br />
                <p className="signup-descrip">{welcomeMessage}</p>
                <br />
                <div className="signup-fields">
                    <label className="signup-labels">
                        First Name
                        <input
                            type="text"
                            value={firstName}
                            placeholder="First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                            className="input-field"
                            required
                        />
                    </label>
                    <label className="signup-labels">
                        Last Name
                        <input
                            type="text"
                            value={lastName}
                            placeholder="Last Name"
                            onChange={(e) => setLastName(e.target.value)}
                            className="input-field"
                            required
                        />
                    </label>
                    <label className="signup-labels">
                        Email
                        <input
                            className="input-field"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label className="signup-labels">
                        Password
                        <input
                            className="input-field"
                            type="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="singup-buttons-container">
                    <button
                        className="create-account-button-signup"
                        type="submit"
                    >
                        CREATE ACCOUNT
                    </button>
                    <br />
                    <p className="signup-p">Already have an account?</p>
                    <br />
                    <button className="sign-in-button" onClick={handleClick}>
                        SIGN IN
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignupFormPage;
