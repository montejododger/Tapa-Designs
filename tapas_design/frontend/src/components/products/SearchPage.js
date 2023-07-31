import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { useParams } from "react-router-dom";
import ProductIndexItem from "./ProductIndexItem";
import "./ProductIndex.css";

const selectProducts = createSelector(
    (state) => state.products,
    (products) => Object.values(products)
);

function SearchPage() {
    const productsFromState = useSelector(selectProducts);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productsFromState);
    }, [productsFromState]);

    if (products === undefined) return null;

    return (
        <section className="product-index-wrapper">
            {products.map((product) => (
                <ProductIndexItem product={product} key={product.id} />
            ))}
        </section>
    );
}

export default SearchPage;