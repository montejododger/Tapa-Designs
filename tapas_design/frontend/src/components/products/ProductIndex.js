import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { fetchProducts } from "../../store/productsReducer";
import ProductIndexItem from "./ProductIndexItem";
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
        <section className="product-index-wrapper">
            {/* <p>Index Header Bar</p> */}
            {products.map((product) => (
                <ProductIndexItem product={product} key={product.id} />
            ))}
        </section>
    );
}

export default ProductIndex;
