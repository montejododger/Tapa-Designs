import csrfFetch from "./csrf";

// ACTION CONSTANTS

export const RECEIVE_CART_ITEMS = "cartItems/RECEIVE_CART_ITEMS";
export const RECEIVE_CART_ITEM = "cartItems/RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = "cartItems/REMOVE_CART_ITEM";

export const receiveCartItems = (cartItems) => {
    return {
        type: RECEIVE_CART_ITEMS,
        cartItems,
    };
};

export const receiveCartItem = (cartItem) => {
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

// useEffec to index

export const fetchCartItems = () => async (dispatch) => {
    const res = await fetch(`/api/cart_items`);

    if (res.ok) {
        const cartItems = await res.json();
        dispatch(receiveCartItems(cartItems));
    }
};


// TODO: i think its data then go data.cartItem
export const fetchCartItem = (cartItemId) => async (dispatch) => {
    const res = await fetch(`/api/cart_items/${cartItemId}`);

    if (res.ok) {
        const cartItem = await res.json();
        dispatch(receiveCartItem(cartItem));
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
        const newCartItem = await res.json();
        dispatch(receiveCartItem(newCartItem));
    }
};

// TODO: what it dispatches might not be right, possibly

export const updateCartItem = (cartItem) => async (dispatch) => {
    const res = await csrfFetch(`/api/cart_items/${cartItem.id}`, {
        method: "PATCH",
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
    });

    if (res.ok) {
        const updatedCartItem = await res.json();
        dispatch(receiveCartItem(updatedCartItem));
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

const cartItemsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            return { ...action.cart_items };
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
