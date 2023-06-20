import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    // TODO: set last and first name
    const [firstName] = useState("");
    const [lastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [redirect, setRedirect] = useState(false);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, password })).then(
                async (res) => {
                    let data = await res.json();
                    if (data?.errors) setErrors(data.errors);
                    else if (data) setErrors([data]);
                    else setErrors([res.statusText]);
                }
            );
        }
        return setErrors([
            "Confirm Password field must be the same as the Password field",
        ]);
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
                <ul>
                    {errors.map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
                <br />
                <h6 className="signup-header">Create Your Account</h6>
                <br />
                <p className="signup-descrip">{welcomeMessage}</p>
                <br />
                <div className="signup-fields">
                    {/* TODO: add onchange once i update backend */}
                    <label className="signup-labels">
                        First Name
                        <input
                            type="text"
                            value={firstName}
                            className="input-field"
                        />
                    </label>
                    <label className="signup-labels">
                        Last Name
                        <input
                            type="text"
                            value={lastName}
                            className="input-field"
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <label className="signup-labels">
                        Confirm Password
                        <input
                            className="input-field"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="singup-buttons-container">
                    <button className="create-account-button-signup" type="submit">
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
