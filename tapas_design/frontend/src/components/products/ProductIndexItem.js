import React from "react";
import { Link } from "react-router-dom";

function ProductIndexItem({ product }) {
    const photo = product.photos[0];

    return (
        <div className="index-item-container">
            <div className="index-img-container">
                <Link to={`/products/${product.id}`}>
                    <img src={photo} alt={`${product.name}`} />
                </Link>
            </div>
            <div className="index-item-info-container">
                <span className="i-i-color">{product.color}</span>
                <br />
                <p className="index-name-container">{product.name}</p>
                <br />
                <p className="index-price-container">${product.price}.00</p>
            </div>
        </div>
    );
}

export default ProductIndexItem;