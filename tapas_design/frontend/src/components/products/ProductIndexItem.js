import React from "react";
import { Link } from "react-router-dom";

function ProductIndexItem({ product }) {
    const photo = product.photos[0];
    
    return (
        <div className="product-item-wrapper">
            <div className="product-img-container">
                <Link to={`/products/${product.id}`}>
                    <img src={photo} alt={`${product.name}`} />
                </Link>
            </div>
            <div className="product-index-item-container">
                {/* <span className="i-i-color">{product.color}</span> */}
                <br />
                <span className="index-name-container">{product.name}</span>
                <br />
                <span className="index-price-container">${product.price}.00</span>
            </div>
        </div>
    );
}

export default ProductIndexItem;
