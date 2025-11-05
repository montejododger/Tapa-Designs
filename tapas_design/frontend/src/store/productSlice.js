// src/store/productsSlice.js
import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import { receiveReviews } from './reviews';

// ---------- THUNKS ----------

// Fetch all products
export const fetchProducts = createAsyncThunk(
	'products/fetchAll',
	async (_, { rejectWithValue }) => {
		const res = await fetch('/api/products');
		if (!res.ok) return rejectWithValue('Failed to fetch products');
		return await res.json();
	}
);

// Fetch one product (with reviews)
export const fetchProduct = createAsyncThunk(
	'products/fetchOne',
	async (productId, { dispatch, rejectWithValue }) => {
		const res = await fetch(`/api/products/${productId}`);
		if (!res.ok) return rejectWithValue('Failed to fetch product');
		const data = await res.json();
		dispatch(receiveReviews(data.reviews));
		return data.product;
	}
);

// Search products
export const fetchSearchResults = createAsyncThunk(
	'products/search',
	async (query, { rejectWithValue }) => {
		let res;
		if (!query) {
			res = await fetch(`/api/products`);
		} else {
			const encoded = encodeURIComponent(query);
			res = await fetch(`/api/products/search?query=${encoded}`);
		}
		if (!res.ok) return rejectWithValue('Search failed');
		return await res.json();
	}
);

// Fetch category products
export const fetchCategoryProducts = createAsyncThunk(
	'products/fetchCategory',
	async (category, { rejectWithValue }) => {
		const encoded = encodeURIComponent(category);
		const res = await fetch(`/api/products/categories/${encoded}`);
		if (!res.ok) return rejectWithValue('Category fetch failed');
		return await res.json();
	}
);

// ---------- SLICE ----------

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		items: {}, // key: productId → product object
		status: 'idle', // idle | loading | succeeded | failed
		error: null,
	},
	reducers: {
		clearProducts: state => {
			state.items = {};
			state.status = 'idle';
			state.error = null;
		},
	},
	extraReducers: builder => {
		builder
			// Fetch all
			.addCase(fetchProducts.pending, state => {
				state.status = 'loading';
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.items = { ...action.payload };
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload;
			})
			// Fetch one
			.addCase(fetchProduct.fulfilled, (state, action) => {
				state.items[action.payload.id] = action.payload;
			})
			// Search
			.addCase(fetchSearchResults.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.items = { ...action.payload };
			})
			// Category
			.addCase(fetchCategoryProducts.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.items = { ...action.payload };
			});
	},
});

export const { clearProducts } = productsSlice.actions;

// ---------- SELECTORS ----------
export const selectProductsItems = state => state.products.items;
export const selectProductById = (state, id) => state.products.items[id];
export const selectProductsStatus = state => state.products.status;

// Memoized selector
export const selectAllProducts = createSelector([selectProductsItems], items =>
	Object.values(items)
);

export default productsSlice.reducer;
