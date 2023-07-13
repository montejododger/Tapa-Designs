import csrfFetch from "./csrf";

// ACTION CONSTANTS

export const RECEIVE_CART_ITEMS = "cartItems/RECEIVE_CART_ITEMS";
export const RECEIVE_CART_ITEM = "cartItems/RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = "cartItems/REMOVE_CART_ITEM";


// actions hold DATA
// returns an object

export const receiveCartItems = (cartItems) => {
    // debugger
    return {
        type: RECEIVE_CART_ITEMS,
        cartItems,
    };
};

export const receiveCartItem = (cartItem) => {
    // debugger
    return {
        type: RECEIVE_CART_ITEM,
        cartItem,
    };
};

export const removeCartItem = (cartItemId) => {
    return {
        type: REMOVE_CART_ITEM,
        cartItemId,
    };
};

// thunk action interacts with backend/middle man
// returns a function

export const fetchCartItems = () => async (dispatch) => {
    const res = await fetch(`/api/cart_items`);

    if (res.ok) {
        const cartItems = await res.json();
        dispatch(receiveCartItems(cartItems));
    }
};


export const createCartItem = (cartItem) => async (dispatch) => {
    const res = await csrfFetch(`/api/cart_items/`, {
        method: "POST",
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
    });

    if (res.ok) {
        const cartItems = await res.json();
        // debugger
        dispatch(receiveCartItems(cartItems));
    }
};


export const updateCartItem = (cartItem) => async (dispatch) => {
    // debugger
    const res = await csrfFetch(`/api/cart_items/${cartItem.id}`, {
        method: "PATCH",
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
    });

    if (res.ok) {
        const data = await res.json();
        // debugger
        dispatch(receiveCartItem(data.cartItem));
    }
};

export const deleteCartItem = (cartItemId) => async (dispatch) => {
    const res = await csrfFetch(`/api/cart_items/${cartItemId}`, {
        method: "DELETE",
    });

    if (res.ok) {
        dispatch(removeCartItem(cartItemId));
    }
};


// chooses which data to update STATE


const cartItemsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    // debugger


    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            return { ...action.cartItems }; // returns index and changed to camelCase
        case RECEIVE_CART_ITEM:
            newState = { ...state };
            return { ...newState, [action.cartItem.id]: action.cartItem };
        case REMOVE_CART_ITEM:
            newState = { ...state };
            delete newState[action.cartItemId];
            return newState;
        default:
            return state;
    }
};

export default cartItemsReducer;



////////////////////////////////////////////////////////////////////////////////////////
