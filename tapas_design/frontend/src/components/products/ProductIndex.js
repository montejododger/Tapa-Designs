import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../store/productsReducer";
import "./ProductIndex.css";

const selectProducts = createSelector(
    (state) => state.products,
    (products) => Object.values(products)
);

function ProductIndex() {
    const dispatch = useDispatch();

    const products = useSelector(selectProducts);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div>
            <ul>
                {products.map((product) => (
                    <div key={product.id}>
                        <p>{product.name}</p>
                        <br />
                        <p>{product.description}</p>
                        <br />
                        {product.photos.map((photo, index) => {
                            return (
                                <Link
                                    to={`${product.id} ${index + 1}`}
                                    key={index}
                                >
                                    <img
                                        src={photo}
                                        alt={`${product.name} ${index + 1} `}
                                        key={index}
                                    />
                                </Link>
                            );
                        })}
                    </div>
                ))}
            </ul>
            <Link to="/">Home</Link>
        </div>
    );
}

export default ProductIndex;
