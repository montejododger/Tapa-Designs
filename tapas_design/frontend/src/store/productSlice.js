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
		all: {}, // all products from /api/products
		items: {}, // currently displayed list (category, search, etc.)
		current: null, // single product page
		status: 'idle',
		error: null,
	},
	reducers: {
		clearProducts: state => {
			state.items = {};
			state.current = null;
			state.status = 'idle';
			state.error = null;
		},
	},
	extraReducers: builder => {
		builder
			// ✅ All products (index)
			.addCase(fetchProducts.pending, state => {
				console.log(state.items);
				state.status = 'loading';
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				console.log({ state, action });
				state.status = 'succeeded';
				state.all = { ...action.payload };
				state.items = { ...action.payload }; // default visible list
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload;
			})

			// ✅ Category
			.addCase(fetchCategoryProducts.pending, state => {
				state.status = 'loading';
				state.items = {}; // clear the visible list only
			})
			.addCase(fetchCategoryProducts.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.items = { ...action.payload };
			})
			.addCase(fetchCategoryProducts.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload;
			})

			// ✅ Search
			.addCase(fetchSearchResults.pending, state => {
				state.status = 'loading';
				state.items = {}; // clear visible list for new search
			})
			.addCase(fetchSearchResults.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.items = { ...action.payload };
			})
			.addCase(fetchSearchResults.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload;
			})

			// ✅ Single product page
			.addCase(fetchProduct.pending, state => {
				state.status = 'loading';
				state.current = null;
			})
			.addCase(fetchProduct.fulfilled, (state, action) => {
				state.status = 'succeeded';
				const product = action.payload;
				if (product && product.id) {
					// store single product separately
					state.current = product;
					// merge into all + items cache
					state.all[product.id] = product;
					state.items[product.id] = product;
				}
			})
			.addCase(fetchProduct.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload;
			});
	},
});

export const { clearProducts } = productsSlice.actions;

// ---------- SELECTORS ----------

const selectItemsObject = s => s.products.items;
const selectAllObject = s => s.products.all;

export const selectProductsItems = createSelector([selectItemsObject], items =>
	Object.values(items)
);

export const selectAllProducts = createSelector([selectAllObject], all =>
	Object.values(all)
);

export const selectCurrentProduct = s => s.products.current;
export const selectProductsStatus = s => s.products.status;

export default productsSlice.reducer;
