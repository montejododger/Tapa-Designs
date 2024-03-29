import { csrfFetch } from "./csrf";

// Set and Remove Current User ACTIONS

// ACTION CONSTANTS
const SET_CURRENT_USER = "session/SET_CURRENT_USER";
const REMOVE_CURRENT_USER = "session/REMOVE_CURRENT_USER";

// ACTION CREATORS
export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        user,
    };
};

export const removeCurrentUser = () => {
    return {
        type: REMOVE_CURRENT_USER,
    };
};

const storeCSRFToken = (response) => {
    const csrfToken = response.headers.get("X-CSRF-Token");
    if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
};

// is user is not null store it as a key value pair in sessionStorage
const storeCurrentUser = (user) => {
    if (user) {
        sessionStorage.setItem("currentUser", JSON.stringify(user));
    } else {
        sessionStorage.removeItem("currentUser");
    }
};

// THUNK ACTIONS
export const login =
    ({ email, password }) =>
    async (dispatch) => {
        const res = await csrfFetch("/api/session", {
            method: "POST",
            body: JSON.stringify({ email, password }),
        });

        const data = await res.clone().json();
        storeCurrentUser(data.user);
        dispatch(setCurrentUser(data.user));
        return res;
    };

export const signup =
    ({ email, password, firstName, lastName }) =>
    async (dispatch) => {
        const res = await csrfFetch("/api/users", {
            method: "POST",
            body: JSON.stringify({ email, firstName, lastName, password }),
        });
        const data = await res.clone().json();
        storeCurrentUser(data.user);
        dispatch(setCurrentUser(data.user));
        return res;
    };

export const logout = () => async (dispatch) => {
    const response = await csrfFetch("/api/session", {
        method: "DELETE",
    });
    storeCurrentUser(null);
    dispatch(removeCurrentUser());
    return response;
};

// This happens when  the page is intially loaded
export const restoreSession = () => async (dispatch) => {
    const res = await csrfFetch(`/api/session`);
    const data = await res.json();
    storeCSRFToken(res);
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user));
    return res;
};

const initialState = {
    user: JSON.parse(sessionStorage.getItem("currentUser")),
};

const sessionReducer = (state = initialState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case SET_CURRENT_USER:
            return { ...state, user: action.user };
        case REMOVE_CURRENT_USER:
            return { ...state, user: null };
        default:
            return state;
    }
};

export default sessionReducer;
