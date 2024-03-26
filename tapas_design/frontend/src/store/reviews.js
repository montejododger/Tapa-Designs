import csrfFetch from "./csrf";

//  ACTION CONSTANTS
export const RECEIVE_REVIEWS = "reviews/RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "reviews/RECEIVE_REVIEW";
export const REMOVE_REVIEW = "reviews/REMOVE_REVIEW";

export const receiveReviews = (reviews) => {
    return {
        type: RECEIVE_REVIEWS,
        reviews,
    };
};

export const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review,
    };
};

export const removeReview = (reviewId) => {
    // debugger
    return {
        type: REMOVE_REVIEW,
        reviewId,
    };
};

// THUNK ACTION CREATORS

export const createReview = (productId, review) => async (dispatch) => {
    // console.log(productId);
    const res = await csrfFetch(`/api/products/${productId}/reviews`, {
        method: "Post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
    });

    if (res.ok) {
        const data = await res.json();
        dispatch(receiveReview(data.review));
    }
};

export const updateReview = (productId, review) => async (dispatch) => {
    const res = await csrfFetch(
        `/api/products/${productId}/reviews/${review.id}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(review),
        }
    );

    if (res.ok) {
        const data = await res.json();
        dispatch(receiveReviews(data.reviews));
    }
};

// returns a function not an action for async type calls

// hits this first when you dispatch deleteReview
// hits the custom csrf fetch method
// hit the backend endpoint with the proper method
// reviews are nested under products routes
// if response 200 then dispatch the action

export const deleteReview = (productId, reviewId) => async (dispatch) => {
    // debugger
    const res = await csrfFetch(
        `/api/products/${productId}/reviews/${reviewId}`,
        {
            method: "DELETE",
        }
    );

    if (res.ok) dispatch(removeReview(reviewId));
};

// REDUCER

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_REVIEWS:
            debugger;
            return { ...action.reviews };
        case RECEIVE_REVIEW:
            newState = { ...state };
            return { ...state, [action.review.id]: action.review };
        case REMOVE_REVIEW:
            newState = { ...state };
            delete newState[action.reviewId];
            return newState;
        default:
            return state;
    }
};

export default reviewsReducer;
