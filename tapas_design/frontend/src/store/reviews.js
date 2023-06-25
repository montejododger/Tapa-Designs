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
    return {
        type: REMOVE_REVIEW,
        reviewId,
    };
};

// TODO: might have to change these to product on update and delete instead of productID


// THUNK ACTION CREATORS

export const createReview = (productId, review) => async (dispatch) => {
    const res = await csrfFetch(`/api/products/${productId}/reviews`, {
        method: "Post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
    });

    if (res.ok) {
        const review = await res.json();
        dispatch(receiveReview(review));
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
        const review = await res.json();
        dispatch(receiveReview(review));
    }
};

export const deleteReview = (productId, reviewId) => async (dispatch) => {
    const res = await csrfFetch(
        `/api/products/${productId}/reviews/${reviewId}`,
        {
            method: "DELETE",
        }
    );

    if (res.ok) {
        dispatch(removeReview(reviewId));
    }
};

// TODO: MAKE A FETCH-USER-REVIEWS THUNK


// REDUCER

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_REVIEWS:
            return { ...action.reviews };
        case RECEIVE_REVIEW:
            newState = { ...state };
            return { ...newState, [action.review.id]: action.review };
        case REMOVE_REVIEW:
            newState = { ...state };
            delete newState[action.reviewId];
            return newState;
        default:
            return state;
    }
};

export default reviewsReducer;
