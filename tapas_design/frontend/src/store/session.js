import { csrfFetch } from "./csrf";

// Set and Remove Current User

// ACTION CONSTANTS
const SET_CURRENT_USER = "session/setCurrentUser";
const REMOVE_CURRENT_USER = "session/removeCurrentUser";

// ACTION CREATORS
export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        payload: user,
    };
};

export const removeCurrentUser = () => {
    return {
        type: REMOVE_CURRENT_USER,
    };
};

//
// THUNK ACTION
export const login = (user) => async (dispatch) => {
    const { email, password } = user;
    const res = await csrfFetch("/api/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
        const { user } = await res.json();
        dispatch(setCurrentUser(user));
        return null;
    } else {
        const error = await res.json();
        return error;
    }
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return { ...state, user: action.payload };
        case REMOVE_CURRENT_USER:
            return { ...state, user: null };
        default:
            return state;
    }
};

export default sessionReducer;
