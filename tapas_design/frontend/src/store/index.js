import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './productSlice';
import sessionReducer from './session';
import reviewsReducer from './reviews';
import cartItemsReducer from './cartItems';

// Create the store
const store = configureStore({
	reducer: {
		session: sessionReducer,
		products: productsReducer,
		reviews: reviewsReducer,
		cartItems: cartItemsReducer,
	},
	// Redux Toolkit automatically includes redux-thunk + DevTools
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;
