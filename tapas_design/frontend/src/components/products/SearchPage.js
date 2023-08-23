import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
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
        <div className="search-index">
            <section className="product-index-wrapper">
                {products.length > 0 ? (
                    products.map((product) => (
                        <ProductIndexItem product={product} key={product.id} />
                    ))
                ) : (
                    <div className="no-items-found">
                        <span>No items found</span>
                    </div>
                )}
            </section>
        </div>
    );
}

export default SearchPage;
