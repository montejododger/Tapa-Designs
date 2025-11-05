import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	fetchProducts,
	selectAllProducts,
	selectProductsStatus,
} from '../../store/productSlice.js';
import ProductIndexItem from './ProductIndexItem';
import './ProductIndex.css';

function ProductIndex() {
	const dispatch = useDispatch();
	const products = useSelector(selectAllProducts);
	const status = useSelector(selectProductsStatus);

	useEffect(() => {
		if (status === 'idle') dispatch(fetchProducts());
	}, [status, dispatch]);

	if (status === 'loading') return <p>Loading...</p>;
	if (status === 'failed') return <p>Failed to load products</p>;

	if (!products?.length) return <p>No products available</p>;

	return (
		<section className='product-index-wrapper'>
			{products.map(product => (
				<ProductIndexItem key={product.id} product={product} />
			))}
		</section>
	);
}

export default ProductIndex;
