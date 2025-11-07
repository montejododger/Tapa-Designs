import csrfFetch from "./csrf";

//  ACTION TYPES
export const RECEIVE_REVIEWS = "reviews/RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "reviews/RECEIVE_REVIEW";
export const REMOVE_REVIEW = "reviews/REMOVE_REVIEW";


// ACTION CREATORS
    //  RETURN AN ACTION OBJECT
export const receiveReviews = (reviews) => {
    return {
        type: RECEIVE_REVIEWS,
        reviews,
    };
};

//! FROM THE THUNK
export const receiveReview = (review) => {
    //! USES THE ACTION CONSTANTS TO HELP FORMAT THE ACTION TYPE - NO TYPOS
    return {
        type: RECEIVE_REVIEW,
        review,
    };

    //! THEN GOES TO THE REDUCER
};

export const removeReview = (reviewId) => {
    return {
        type: REMOVE_REVIEW,
        reviewId,
    };
};


// THUNK ACTION CREATORS
// TURNS AN ACTION INTO A FUNCTION


//! FROM HANDLE SUBMIT ON REVIEW FORM
export const createReview = (productId, review) => async (dispatch) => {
    //! HIT THE CUSTOM FETCH TO ATTATCH CSRF
        // csrfFetch(url, options = {})
        //JS value to JSON string
    const res = await csrfFetch(`/api/products/${productId}/reviews`, {
        method: "Post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
    });

    if (res.ok) {
        //! THEN WILL GO TO ACTION CREATOR -> TOP
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
    const res = await csrfFetch(
        `/api/products/${productId}/reviews/${reviewId}`,
        {
            method: "DELETE",
        }
    );

    if (res.ok) dispatch(removeReview(reviewId));
};

// REDUCER
//! FROM ACTION CREATOR
const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;


    switch (action.type) {
        case RECEIVE_REVIEWS:
            return { ...state, ...action.reviews };
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
