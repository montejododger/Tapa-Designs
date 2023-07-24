import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { useLocation, useHistory } from "react-router-dom";
import { fetchSearchResults } from "../../store/productsReducer";
import ProductIndexItem from "./ProductIndexItem";
import "./ProductIndex.css";

const selectProducts = createSelector(
    (state) => state.products,
    (products) => Object.values(products)
);

function SearchPage() {
    const history = useHistory()
    const dispatch = useDispatch();
    const query = new URLSearchParams(useLocation().search).get("q");
    const products = useSelector(selectProducts);

    useEffect(() => {
        if (query) {
            dispatch(fetchSearchResults(query));
        }
    }, [dispatch, query]);

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