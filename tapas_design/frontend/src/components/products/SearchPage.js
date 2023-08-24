import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import ProductIndexItem from "./ProductIndexItem";
import { useParams } from "react-router-dom";
import "./ProductIndex.css";

const selectProducts = createSelector(
    (state) => state.products,
    (products) => Object.values(products)
);

function SearchPage() {
    const { query } = useParams();
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
                        <div className="search-loop-head">
                            <p className="result-count">
                                No results found for "{query}" found.
                            </p>
                        </div>
                        <div className="no-results-container">
                            <h4 className="ss-title">Suggestions</h4>
                            <ul className="sugg-list">
                                <li>Check for misspellings.</li>
                                <li>
                                    Remove possible redundant keywords(ie.
                                    "products")
                                </li>
                                <li>
                                    Use other words to describe what you are
                                    searching for.
                                </li>
                            </ul>
                        </div>
                        <p className="ss-looking">
                            Still can't find what you're looking for? Contact Us
                        </p>
                        <div className="ss-contact">
                            <h4 className="ss-title">Hours</h4>
                            <p>
                                Monday - Thursday: 9:00 AM - 5:00 PM MST <br />{" "}
                                Friday: 9:00 AM - 2:00 PM MST
                            </p>
                        </div>
                        <div className="ss-phone">
                            <h4 className="ss-title">
                                        Phone
                            </h4>
                            <p>
                                <strong>Telephone: </strong> (555) 555 - 5555
                            </p>
                        </div>
                        <div className="ss-email"> 
                            <h4 className="ss-title">Email</h4>
                            <p className="email">
                                notarealemail@gmail.com
                            </p>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}

export default SearchPage;
