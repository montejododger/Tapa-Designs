import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../../store/productsReducer";
import ProductShowItem from "../ProductShowPage/ProductShow";
import './ProductIndex.css'

function ProductIndex() {
    const dispatch = useDispatch();

    const products = useSelector(state => Object.values(state.products));

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div>
            <ul>
                {products.map((product) => (
                    <ProductShowItem product={product} key={product.id}/>
                ))}
            </ul>
            <Link to={`/products`}>Products</Link>
        </div>
    );
}

export default ProductIndex;

