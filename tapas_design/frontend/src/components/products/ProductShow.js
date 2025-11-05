import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../store/productSlice';
import ProductShowImgSide from './ProductShowImgSide';
import ProductShowRight from './ProductShowRight';
import ReviewHome from '../Reviews/ReviewHome';
import './ProductShow.css';

const ProductShow = () => {
	const { productId } = useParams();
	const id = Number(productId);
	const dispatch = useDispatch();
	const product = useSelector(s => s.products.items[id]);
	const status = useSelector(s => s.products.status);

	useEffect(() => {
		console.log('ProductShow mounted', productId);
		if (id) {
			dispatch(fetchProduct(id));
		}
	}, [dispatch, id]);
	console.log('Redux items:', Object.keys(useSelector(s => s.products.items)));
	console.log('Looking for id:', id);
	if (status === 'loading' || !product) return <p>Loading...</p>;

	return (
		<div className='product-wrapper'>
			<div className='product-show-wrapper'>
				<ProductShowImgSide photos={product.photos} />
				<ProductShowRight product={product} />
			</div>
			<ReviewHome />
		</div>
	);
};

export default ProductShow;
