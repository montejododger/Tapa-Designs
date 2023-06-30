import React, { useState } from "react";
import CartAdd from "../ShoppingCart/CartAdd";
import StarAvg from "../Reviews/StarAvg";

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
        <div className="product-show-right-wrapper">
            <div className="show-product-container">
                <div className="staravg-container">
                    <StarAvg />
                </div>
                <h3>{product.name}</h3>
                <br />
                <div>
                    <p>${product.price}.00</p>
                </div>
                <br />
                <p>Afterpay available for orders over $35</p>
                <br />
                <br />
                <div>
                    <p>Available colors:</p>
                    <br />
                    {colors.map((color, index) => (
                        <button
                            key={index + 1}
                            className="sizes-swatches"
                            onClick={() => handleColorClick(color)}
                        >
                            {color}
                        </button>
                    ))}
                </div>
                <br />
                <p>Available sizes:</p>
                <br />
                {sizes.map((size, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handleSizeClick(size)}
                    >
                        {size}
                    </button>
                ))}
                <br />

                <p>Quantity:</p>
                <br />
                <select value={quantity} onChange={handleQuantityChange}>
                    {[1, 2, 3, 4].map((value, index) => (
                        <option key={index + 1} value={value}>
                            {value}
                        </option>
                    ))}
                </select>
                <br />
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
        </div>
    );
};

export default ProductShowRight;

// TODO: i meed to fix options and not get a , or split on it
