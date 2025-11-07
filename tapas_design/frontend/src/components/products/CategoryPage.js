import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCategoryProducts } from '../../store/productSlice'; // use slice version
import ProductIndexItem from './ProductIndexItem';
import './ProductIndex.css';

function CategoryPage() {
	const dispatch = useDispatch();
	const { category } = useParams();
	const productsObj = useSelector(state => state.products.items);
	const status = useSelector(state => state.products.status);

	useEffect(() => {
		if (category) dispatch(fetchCategoryProducts(category));
	}, [dispatch, category]);

	// Convert the object of products into an array safely
	const products = Object.values(productsObj || {}).filter(Boolean);

	if (status === 'loading') return <p>Loading {category} products...</p>;
	if (!products.length) return <p>No {category} products found.</p>;

	return (
		<section className='product-category-wrapper'>
			{products.map(product => (
				<ProductIndexItem key={product.id} product={product} />
			))}
		</section>
	);
}

export default CategoryPage;
