import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './reset.css';
import './index.css';
import App from './App';
import store from './store';
import * as sessionActions from './store/session';

// Import your session and product/cart actions
import { createUser, loginUser, logoutUser } from './store/usersReducer';
import { csrfFetch } from './store/csrf';
import * as productActions from './store/productSlice';
import * as cartActions from './store/cartItems';

// Dev-window helpers (safe for dev only)
if (process.env.NODE_ENV !== 'production') {
	window.store = store;
	window.createUser = createUser;
	window.loginUser = loginUser;
	window.logoutUser = logoutUser;
	window.csrfFetch = csrfFetch;
	window.sessionActions = sessionActions;
	window.productActions = productActions;
	window.cartActions = cartActions;
}

// ---------- React 18 root setup ----------
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const Root = () => (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

// ---------- Render with session restore ----------
const renderApplication = () => {
	root.render(
		<React.StrictMode>
			<Root />
		</React.StrictMode>
	);
};

// ---------- Session restoration ----------
const currentUser = sessionStorage.getItem('currentUser');
const xToken = sessionStorage.getItem('X-CSRF-Token');

if (!currentUser || !xToken) {
	store.dispatch(sessionActions.restoreSession()).then(renderApplication);
} else {
	renderApplication();
}
