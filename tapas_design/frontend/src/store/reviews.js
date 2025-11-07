import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import { csrfFetch } from './csrf';

const ensureJson = async response => {
        try {
                return await response.clone().json();
        } catch (error) {
                return {};
        }
};

const normalizeReviews = reviews => {
        if (!reviews) return {};
        if (Array.isArray(reviews)) {
                return reviews.reduce((acc, review) => {
                        if (review && review.id) acc[review.id] = review;
                        return acc;
                }, {});
        }
        return { ...reviews };

// ---------- THUNKS ----------
export const createReview = createAsyncThunk(
        'reviews/create',
        async ({ productId, review }, { rejectWithValue }) => {
                const res = await csrfFetch(`/api/products/${productId}/reviews`, {
                        method: 'POST',
                        body: JSON.stringify(review),
                });
                if (!res.ok) {
                        const data = await ensureJson(res);
                        return rejectWithValue(data);
                }
                const data = await res.json();
                return data.review;
        }
);

export const updateReview = createAsyncThunk(
        'reviews/update',
        async ({ productId, review }, { rejectWithValue }) => {
                const res = await csrfFetch(`/api/products/${productId}/reviews/${review.id}`, {
                        method: 'PATCH',
                        body: JSON.stringify(review),
                });
                if (!res.ok) {
                        const data = await ensureJson(res);
                        return rejectWithValue(data);
                }
                const data = await res.json();
                return data.reviews;
        }
);

export const deleteReview = createAsyncThunk(
        'reviews/delete',
        async ({ productId, reviewId }, { rejectWithValue }) => {
                const res = await csrfFetch(`/api/products/${productId}/reviews/${reviewId}`, {
                        method: 'DELETE',
                });
                if (!res.ok) {
                        const data = await ensureJson(res);
                        return rejectWithValue(data);
                }
                const data = await res.json();
                return data.review?.id ?? reviewId;
        }
);

const initialState = {
        entities: {},
        status: 'idle',
        error: null,
};

const reviewsSlice = createSlice({
        name: 'reviews',
        initialState,
        reducers: {
                receiveReviews: (state, action) => {
                        state.entities = normalizeReviews(action.payload);
                        state.status = 'succeeded';
                        state.error = null;
                },
                clearReviews: state => {
                        state.entities = {};
                        state.status = 'idle';
                        state.error = null;
                },
        },
        extraReducers: builder => {
                builder
                        .addCase(createReview.pending, state => {
                                state.status = 'loading';
                                state.error = null;
                        })
                        .addCase(createReview.fulfilled, (state, action) => {
                                state.status = 'succeeded';
                                const review = action.payload;
                                if (review && review.id) {
                                        state.entities[review.id] = review;
                                }
                        })
                        .addCase(createReview.rejected, (state, action) => {
                                state.status = 'failed';
                                state.error = action.payload || action.error?.message || null;
                        })
                        .addCase(updateReview.pending, state => {
                                state.status = 'loading';
                                state.error = null;
                        })
                        .addCase(updateReview.fulfilled, (state, action) => {
                                state.status = 'succeeded';
                                const reviews = normalizeReviews(action.payload);
                                state.entities = reviews;
                        })
                        .addCase(updateReview.rejected, (state, action) => {
                                state.status = 'failed';
                                state.error = action.payload || action.error?.message || null;
                        })
                        .addCase(deleteReview.pending, state => {
                                state.status = 'loading';
                                state.error = null;
                        })
                        .addCase(deleteReview.fulfilled, (state, action) => {
                                state.status = 'succeeded';
                                delete state.entities[action.payload];
                        })
                        .addCase(deleteReview.rejected, (state, action) => {
                                state.status = 'failed';
                                state.error = action.payload || action.error?.message || null;
                        });
        },
});


export const { receiveReviews, clearReviews } = reviewsSlice.actions;

// ---------- SELECTORS ----------
const selectReviewsSlice = state => state.reviews;
const selectReviewEntities = createSelector([selectReviewsSlice], reviews => reviews.entities);

export const selectAllReviews = createSelector([selectReviewEntities], entities =>
        Object.values(entities)
);

export const selectReviewsStatus = state => state.reviews.status;
export const selectReviewsError = state => state.reviews.error;

export default reviewsSlice.reducer;
