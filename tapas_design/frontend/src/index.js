import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./reset.css";
import "./index.css";
import App from "./App";
import configureStore from "./store/index";
import { csrfFetch } from "./store/csrf";
import { createUser, loginUser, logoutUser } from "./store/usersReducer";
import * as sessionActions from "./store/session";
import * as productActions from "./store/productsReducer";
import * as cartActions from "./store/cartItems";

//testing
// TODO: take out after production

// init a new store - sets up redux store with , middelware, reducers, enhancers
const store = configureStore();

if (process.env.NODE_ENV !== "production") {
    window.store = store;
    window.createUser = createUser;
    window.loginUser = loginUser;
    window.logoutUser = logoutUser;
    window.csrfFetch = csrfFetch;
    window.sessionActions = sessionActions;
    window.productActions = productActions;
    window.cartActions = cartActions;

    // window.
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


// check is there is a current user or token
    // if it is present then restore session and then render App
    // else just render app cause there is no curr or token present
if (
    sessionStorage.getItem("currentUser") === null ||
    sessionStorage.getItem("X-CSRF-Token") === null
) {
    store.dispatch(sessionActions.restoreSession()).then(renderApplication);
} else {
    renderApplication();
}
