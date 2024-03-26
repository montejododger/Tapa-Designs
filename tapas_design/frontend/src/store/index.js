// Import your individual reducers here:
// import session from './session'
// import cart from './cart'

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import usersReducer from "./usersReducer";
import productsReducer from "./productsReducer";
import sessionReducer from "./session";
import reviewsReducer from "./reviews";
import cartItemsReducer from "./cartItems";

// this will help extend the store capabilities with middleware
let enhancer;

// conditional middleware setup
// checks if in porduction or not
// if not
if (process.env.NODE_ENV === "production") {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require("redux-logger").default;

    // if dev redux tool installed it will use that or defualt to compose
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        // compose allowys for multiple enhancers
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

// combine all reducers into a single reducer
//keys will show up in the global state and are managed by the value

// debugger
const rootReducer = combineReducers({
    session: sessionReducer,
    // users: usersReducer,
    products: productsReducer,
    reviews: reviewsReducer,
    cartItems: cartItemsReducer,
});

// debugger

// init a store
const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
