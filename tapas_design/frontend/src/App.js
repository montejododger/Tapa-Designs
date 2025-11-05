import React from 'react';
import { Routes, Route } from 'react-router-dom'; // 👈 updated import
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SigupPage';
import ProductHome from './components/products/ProductHome';
import ProductShow from './components/products/ProductShow';
import Navigation from './components/Navigation';
import BottomBanner from './components/Navigation/BottomBanner';
import HomeSplash from './components/HomeSplash/HomeSplash';
import SearchPage from './components/products/SearchPage';
import CategoryPage from './components/products/CategoryPage';

//! Root of the React application
const App = () => {
	return (
		<div className='whole-app-wrapper'>
			<Navigation />

			<Routes>
				<Route path='/search/:query?' element={<SearchPage />} />
				<Route path='/categories/:category' element={<CategoryPage />} />
				<Route path='/products/:productId' element={<ProductShow />} />
				<Route path='/products' element={<ProductHome />} />
				<Route path='/login' element={<LoginFormPage />} />
				<Route path='/signup' element={<SignupFormPage />} />
				<Route path='/' element={<HomeSplash />} />
			</Routes>

			<BottomBanner />
		</div>
	);
};

export default App;
