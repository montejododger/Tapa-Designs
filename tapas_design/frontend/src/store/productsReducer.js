import { receiveReviews } from "./reviews";

// ACTION CONSTANTS
const RECEIVE_PRODUCTS = "products/RECEIVER_PRODUCTS";
const RECEIVE_PRODUCT = "products/RECEIVER_PRODUCT";

// ACTION CREATORS
export const receiveProducts = (products) => {
    return {
        type: RECEIVE_PRODUCTS,
        products,
    };
};

export const receiveProduct = (product) => {
    return {
        type: RECEIVE_PRODUCT,
        product,
    };
};

// THUNK ACTON CREATORS
export const fetchProducts = () => async (dispatch) => {
    const res = await fetch("/api/products");

    if (res.ok) {
        const products = await res.json();
        dispatch(receiveProducts(products));
    }
};

export const fetchProduct = (productId) => async (dispatch) => {
    const res = await fetch(`/api/products/${productId}`);

    if (res.ok) {
        const data = await res.json();
        // its now a data object that has a product and all its reviews in a single fetch
        // all thru JBUILDER
        dispatch(receiveProduct(data.product));
        dispatch(receiveReviews(data.reviews));
    }
};

export const fetchSearchResults = (query) => async (dispatch) => {
    let res;

    if (!query) {
        res = await fetch(`/api/products`); // Change the endpoint to the one that fetches all products
    } else {
        const encodedQuery = encodeURIComponent(query);
        res = await fetch(`/api/products/search?query=${encodedQuery}`);
    }

    if (res.ok) {
        const products = await res.json();
        dispatch(receiveProducts(products));
    }
};

export const fetchCategoryProducts = (category) => async (dispatch) => {
    const encodedCategory = encodeURIComponent(category);
    const res = await fetch(`/api/products/categories/${encodedCategory}`);

    if (res.ok) {
        const products = await res.json();
        dispatch(receiveProducts(products));
    }
};

export const productsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return { ...action.products };
        case RECEIVE_PRODUCT:
            newState = { ...state };
            return { ...newState, [action.product.id]: action.product };
        default:
            return state;
    }
};

export default productsReducer;
