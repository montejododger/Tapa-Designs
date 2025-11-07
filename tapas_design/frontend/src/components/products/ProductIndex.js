import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
	fetchProducts,
	selectProductsItems,
	selectProductsStatus,
} from '../../store/productSlice';
import ProductIndexItem from './ProductIndexItem';
import './ProductIndex.css';

function ProductIndex() {
	const dispatch = useDispatch();
	const products = useSelector(selectProductsItems);
	const status = useSelector(selectProductsStatus);
	const location = useLocation();

	useEffect(() => {
		// Always fetch when on the main collection page
		if (location.pathname === '/products') {
			dispatch(fetchProducts());
		}
	}, [dispatch, location.pathname]);

	if (status === 'loading' && !products.length) return <p>Loading...</p>;
	if (status === 'failed') return <p>Failed to load products</p>;
	if (!products.length) return <p>No products available</p>;

	return (
		<section className='product-index-wrapper'>
			{products.map(product => (
				<ProductIndexItem key={product.id} product={product} />
			))}
		</section>
	);
}

export default ProductIndex;
