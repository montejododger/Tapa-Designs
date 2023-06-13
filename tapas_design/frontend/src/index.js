import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import restoreSession from "../../../csrf"; // this route will change
// import { createUser, loginUser, logoutUser } from "../usersReducers";

//testing

//window.
//window.
//window.
//window.
//window.

const initializeApp = () => {
    // let currentUser = JSON.parse(sessionStorage.getItem("currentUser")); // grab current user object
    // let initialState = {};

    // if (currentUser) {
    //     initialState = {
    //         users: {
    //             [currentUser.id]: currentUser,
    //         },
    //     };
    // }

    // // initialize store with currentUser if logged in
    // const store = configureStore(initialState);

    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById("root")
    );
};

// we get our csrf token and potentianlly a current user before initializing our app
restoreSession().then(initializeApp);
