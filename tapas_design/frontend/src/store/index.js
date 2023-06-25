import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import usersReducer from "./usersReducer";
import productsReducer from "./productsReducer";
import session from "./session";
import reviewsReducer from "./reviews";

// Import your individual reducers here:
// import session from './session'
// import cart from './cart'
// ...

let enhancer;

if (process.env.NODE_ENV === "production") {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require("redux-logger").default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const rootReducer = combineReducers({
    // Add your reducer functions here:
    // session,
    // cart,
    session,
    users: usersReducer,
    products: productsReducer,
    reviews: reviewsReducer,
});

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
