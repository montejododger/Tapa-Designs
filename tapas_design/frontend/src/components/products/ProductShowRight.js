import React, { useState } from "react";
import CartAdd from "../ShoppingCart/CartAdd";

const ProductShowRight = ({ product }) => {
    const [pickedSize, setSize] = useState("");
    const [pickedColor, setColor] = useState("");
    const [quantity, setQuantity] = useState(1);

    const sizes = product.size.split(" ");
    const colors = product.color.split(" ");

    const handleSizeClick = (size) => {
        setSize(size);
    };

    const handleColorClick = (color) => {
        setColor(color);
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    return (
        <div className="show-product-container" key={product.id}>
            <p>{product.name}</p>
            <br />
            <p>{product.price}</p>
            <br />
            <p>Afterpay available for orders over $35</p>
            <br />
            <p>Available colors:</p>
            {colors.map((color) => (
                <button onClick={() => handleColorClick(color)}>{color}</button>
            ))}
            <br />
            <p>Available sizes:</p>
            {sizes.map((size) => (
                <button onClick={() => handleSizeClick(size)}>{size}</button>
            ))}
            <br />

            <p>Quantity:</p>
            <select value={quantity} onChange={handleQuantityChange}>
                {[...Array(4).keys()].map((i) => (
                    <option key={i + 1} value={i + 1}>
                        {i + 1}
                    </option>
                ))}
            </select>
            <br />
            <CartAdd
                product={product}
                selectedOptions={{
                    productId: product.id,
                    options: `${pickedSize}, ${pickedColor}`,
                    quantity: quantity,
                }}
            />
            <br />
        </div>
    );
};

export default ProductShowRight;
