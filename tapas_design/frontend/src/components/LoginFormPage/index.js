import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import "./LoginForm.css";

export const LoginFormPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // resetting setErrors to an empty array each time
        setErrors([]);
        // this is calling Login thunk action from session.js
        return dispatch(sessionActions.login({ email, password })).then(
            async (res) => {
                if (res.ok) {
                    history.push("/");
                } else {
                    let data = await res.json();
                    if (data?.errors) setErrors(data.errors);
                    else if (data) setErrors([data]);
                    else setErrors([res.statusText]);
                }
            }
        );
    };

    // DEMO USER LOGIN
    const handleDemoSubmit = (e) => {
        e.preventDefault();

        const demoUserEmail = "demo@user.io";
        const demoUserPassword = "password";

        return dispatch(
            sessionActions.login({
                email: demoUserEmail,
                password: demoUserPassword,
            })
        ).then(async (res) => {
            if (res.ok) {
                history.push("/");
            } else {
                let data = await res.json();
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            }
        });
    };

    // CREATE ACCOUNT BUTTON
    const handleClick = (e) => {
        e.preventDefault();
        setRedirect(true);
    };

    if (redirect) {
        return <Redirect to={"/signup"} />;
    }


    if (sessionUser) return history.push("/");

    return (
        <div className="login-container">
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
                <h6 className="signin-header">Sign In</h6>
                <br />
                <p className="signin-descrip">
                    Sign in or create an account to become a member.
                </p>
                <br />
                <div className="login-fields">
                    <label className="login-labels">
                        Email Address *
                        <input
                            className="input-field"
                            // placeholder="Email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label className="login-labels">
                        Password *
                        <input
                            className="input-field"
                            // placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="login-buttons-container">
                    <button className="signup-button" type="submit">
                        SIGN IN
                    </button>
                    <br />
                    <button
                        className="signup-button"
                        onClick={handleDemoSubmit}
                    >
                        DEMO USER
                    </button>
                    <br />
                    <button
                        onClick={handleClick}
                        className="create-account-button"
                    >
                        CREATE ACCOUNT
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginFormPage;
