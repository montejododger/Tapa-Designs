import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import csrfFetch from './csrf';

const ensureJson = async response => {
        try {
                return await response.clone().json();
        } catch (error) {
                return {};
        }
};

// ---------- THUNKS ----------
export const fetchCartItems = createAsyncThunk(
        'cartItems/fetchAll',
        async (_, { rejectWithValue }) => {
                const res = await fetch('/api/cart_items/');
                if (!res.ok) {
                        const data = await ensureJson(res);
                        return rejectWithValue(data.errors || 'Failed to fetch cart items');
                }
                return await res.json();
        }
);

export const createCartItem = createAsyncThunk(
        'cartItems/create',
        async (cartItem, { rejectWithValue }) => {
                const res = await csrfFetch('/api/cart_items/', {
                        method: 'POST',
                        body: JSON.stringify(cartItem),
                });
                if (!res.ok) {
                        const data = await ensureJson(res);
                        return rejectWithValue(data.errors || 'Failed to add cart item');
                }
                const data = await res.json();
                return data.cartItem;
        }
);

export const updateCartItem = createAsyncThunk(
        'cartItems/update',
        async (cartItem, { rejectWithValue }) => {
                const res = await csrfFetch(`/api/cart_items/${cartItem.id}`, {
                        method: 'PATCH',
                        body: JSON.stringify(cartItem),
                });
                if (!res.ok) {
                        const data = await ensureJson(res);
                        return rejectWithValue(data.errors || 'Failed to update cart item');
                }
                const data = await res.json();
                return data.cartItem;
        }
);

export const deleteCartItem = createAsyncThunk(
        'cartItems/delete',
        async (cartItemId, { rejectWithValue }) => {
                const res = await csrfFetch(`/api/cart_items/${cartItemId}`, {
                        method: 'DELETE',
                });
                if (!res.ok) {
                        const data = await ensureJson(res);
                        return rejectWithValue(data.errors || 'Failed to delete cart item');
                }
                return cartItemId;
        }
);

export const clearCart = createAsyncThunk(
        'cartItems/clear',
        async (_, { rejectWithValue }) => {
                const res = await csrfFetch('/api/cart_items/clear', {
                        method: 'DELETE',
                });
                if (!res.ok) {
                        const data = await ensureJson(res);
                        return rejectWithValue(data.errors || 'Failed to clear cart');
                }
                return true;
        }
);

const initialState = {
        entities: {},
        status: 'idle',
        error: null,
};

const cartItemsSlice = createSlice({
        name: 'cartItems',
        initialState,
        reducers: {
                resetCartState: state => {
                        state.entities = {};
                        state.status = 'idle';
                        state.error = null;
                },
        },
        extraReducers: builder => {
                builder
                        .addCase(fetchCartItems.pending, state => {
                                state.status = 'loading';
                                state.error = null;
                        })
                        .addCase(fetchCartItems.fulfilled, (state, action) => {
                                state.status = 'succeeded';
                                state.entities = action.payload ? { ...action.payload } : {};
                        })
                        .addCase(fetchCartItems.rejected, (state, action) => {
                                state.status = 'failed';
                                state.error = action.payload || action.error?.message || null;
                        })
                        .addCase(createCartItem.pending, state => {
                                state.status = 'loading';
                                state.error = null;
                        })
                        .addCase(createCartItem.fulfilled, (state, action) => {
                                state.status = 'succeeded';
                                const item = action.payload;
                                if (item && item.id) {
                                        state.entities[item.id] = item;
                                }
                        })
                        .addCase(createCartItem.rejected, (state, action) => {
                                state.status = 'failed';
                                state.error = action.payload || action.error?.message || null;
                        })
                        .addCase(updateCartItem.pending, state => {
                                state.status = 'loading';
                                state.error = null;
                        })
                        .addCase(updateCartItem.fulfilled, (state, action) => {
                                state.status = 'succeeded';
                                const item = action.payload;
                                if (item && item.id) {
                                        state.entities[item.id] = item;
                                }
                        })
                        .addCase(updateCartItem.rejected, (state, action) => {
                                state.status = 'failed';
                                state.error = action.payload || action.error?.message || null;
                        })
                        .addCase(deleteCartItem.pending, state => {
                                state.status = 'loading';
                                state.error = null;
                        })
                        .addCase(deleteCartItem.fulfilled, (state, action) => {
                                state.status = 'succeeded';
                                delete state.entities[action.payload];
                        })
                        .addCase(deleteCartItem.rejected, (state, action) => {
                                state.status = 'failed';
                                state.error = action.payload || action.error?.message || null;
                        })
                        .addCase(clearCart.pending, state => {
                                state.status = 'loading';
                                state.error = null;
                        })
                        .addCase(clearCart.fulfilled, state => {
                                state.status = 'succeeded';
                                state.entities = {};
                        })
                        .addCase(clearCart.rejected, (state, action) => {
                                state.status = 'failed';
                                state.error = action.payload || action.error?.message || null;
                        });
        },
});

export const { resetCartState } = cartItemsSlice.actions;

// ---------- SELECTORS ----------
const selectCartSlice = state => state.cartItems;
const selectCartEntities = createSelector([selectCartSlice], cart => cart.entities);

export const selectCartItemsArray = createSelector([selectCartEntities], entities =>
        Object.values(entities)
);

export const selectCartItemsStatus = state => state.cartItems.status;
export const selectCartItemsError = state => state.cartItems.error;

export default cartItemsSlice.reducer;
