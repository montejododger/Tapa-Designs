import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./reset.css";
import "./index.css";
import App from "./App";
import configureStore from "./store/index";
import * as sessionActions from "./store/session";

// init a new store - sets up redux store with , middleware, reducers, enhancers

//! FIRST WE CREATE A STORE -> indexReducer
const store = configureStore();

// TODO: take out after production
// if (process.env.NODE_ENV !== "production") {
//     window.store = store;
//     window.createUser = createUser;
//     window.loginUser = loginUser;
//     window.logoutUser = logoutUser;
//     window.csrfFetch = csrfFetch;
//     window.sessionActions = sessionActions;
//     window.productActions = productActions;
//     window.cartActions = cartActions;
// }

// redux provider component makes the redux store available to all nested component
//  allowing for any component to access and update global state
// Redux - Provider, client side routing with browserRouter

// A <BrowserRouter> stores the current location in the browser's address bar using    clean URLs and navigates using the browser's built-in history stack.

const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
};


// Strict mode is strictly for development
const RenderApplication = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Root />
        </React.StrictMode>,
        document.getElementById("root")
    );
};

// check is there is a current user or token
// tries to restore the session then render the application

let currentUser = sessionStorage.getItem("currentUser") || null;
let xToken = sessionStorage.getItem("X-CSRF-Token") || null;

if (currentUser === null || xToken === null) {
    store.dispatch(sessionActions.restoreSession()).then(RenderApplication);
} else {
    RenderApplication();
}
