import React, { useState } from "react";
import CartAdd from "../ShoppingCart/CartAdd";

const ProductShowRight = ({ product }) => {
    const [pickedSize, setSize] = useState("");
    const [pickedColor, setColor] = useState("");
    const [quantity, setQuantity] = useState(1);

    const sizes = product.size.split(" ");
    const colors = product.color.split(" ");

    const handleItemAdd = () => {
        setSize("");
        setColor("");
        setQuantity(1);
    };

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
        <div className="show-product-container">
            <p>{product.name}</p>
            <br />
            <p>{product.price}</p>
            <br />
            <p>Afterpay available for orders over $35</p>
            <br />
            <p>Available colors:</p>
            {colors.map((color, index) => (
                <button key={index + 1} onClick={() => handleColorClick(color)}>
                    {color}
                </button>
            ))}
            <br />
            <p>Available sizes:</p>
            {sizes.map((size, index) => (
                <button key={index + 1} onClick={() => handleSizeClick(size)}>
                    {size}
                </button>
            ))}
            <br />

            <p>Quantity:</p>
            <select value={quantity} onChange={handleQuantityChange}>
                {[1, 2, 3, 4].map((value, index) => (
                    <option key={index + 1} value={value}>
                        {value}
                    </option>
                ))}
            </select>
            <br />
            <CartAdd
                onItemAdd={handleItemAdd}
                product={product}
                selectedOptions={{
                    productId: product.id,
                    options: `${pickedSize} ${pickedColor}`,
                    quantity: quantity,
                }}
            />
            <br />
        </div>
    );
};

export default ProductShowRight;

// TODO: i meed to fix options and not get a , or split on it
