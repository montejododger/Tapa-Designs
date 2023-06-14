import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import configureStore from "./store/index";
import { csrfFetch, restoreSession } from "./store/csrf";
import { createUser, loginUser, logoutUser } from "./store/usersReducer";
import * as sessionActions from './store/session'

//testing
// TODO: take out after production
const store = configureStore();

if (process.env.NODE_ENV !== "production") {
    window.store = store;
    window.createUser = createUser;
    window.loginUser = loginUser;
    window.logoutUser = logoutUser;
    window.csrfFetch = csrfFetch;
    window.sessionActions = sessionActions
    //window.
}

const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
};

const renderApplication = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Root />
        </React.StrictMode>,
        document.getElementById("root")
    );
};

if (sessionStorage.getItem("X-CSRF-Token") === null) {
    restoreSession().then(renderApplication);
} else {
    renderApplication();
}

// we get our csrf token and potentianlly a current user before initializing our app
// restoreSession().then(initializeApp);
