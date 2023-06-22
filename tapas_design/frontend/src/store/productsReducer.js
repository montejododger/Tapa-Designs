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

//  SELECTORS

// export const getProducts = (state) => {
//     return state?.product ? Object.values(state.products) : [];
// };

// export const getProduct = (productId) => (state) => {
//     return state?.product ? state.[actions] : nil;
// };

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
        const product = await res.json();
        dispatch(receiveProduct(product));
    }
};

export const productsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_PRODUCTS:
            newState = { ...state };
            return {...newState, ...action.products}
        case RECEIVE_PRODUCT:
            newState = { ...state };
            return { ...newState, [action.product.id]: action.product };
        default:
            return state;
    }
};

export default productsReducer;
