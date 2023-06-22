import React from "react";
// import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";

function ProductShow({ product }) {
    // TODO: ADD FUNCTIONALITY OF BUTTON TO ADD TO CART
    // const dispatch = useDispatch();

    return (
        <div>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
            <button>(REMOVE FROM CART)</button>
        </div>
    );
}
export default ProductShow;
