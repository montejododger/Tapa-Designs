import React, { useState } from "react";
import CartAdd from "../ShoppingCart/CartAdd";
import StarAvg from "../Reviews/StarAvg";
import ReviewTotal from "../Reviews/ReviewTotal";

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
        const value = parseInt(e.target.value, 10);

        if (!isNaN(value) && e.target.value > 0) {
            setQuantity(value);
        }
    };

    return (
        <div className="product-show-right-wrapper">
            <div className="show-product-container">
                <div className="staravg-container">
                    <StarAvg />
                    <ReviewTotal />
                </div>
                <h3 className="item-prop-name">{product.name}</h3>
                <br />
                <div className="item-price">
                    <p>${product.price}.00</p>
                </div>
                <br />
                <p>Afterpay available for orders over $35</p>
                <br />
                <div className="item-colors">
                    <p className="colors-title">Color: {pickedColor}</p>
                    {/* <br /> */}
                    {colors.map((color, index) => (
                        <button
                            key={index + 1}
                            className={`color-swatches ${
                                color === pickedColor ? "selected" : ""
                            }`}
                            onClick={() => handleColorClick(color)}
                        >
                            {color}
                        </button>
                    ))}
                </div>
                <br />
                <div className="item-sizes">
                    <p className="size-title">Size: {pickedSize}</p>
                    {/* <br /> */}
                    {sizes.map((size, index) => (
                        <button
                            key={index + 1}
                            className={`size-swatches ${
                                size === pickedSize ? "selected" : ""
                            }`}
                            onClick={() => handleSizeClick(size)}
                        >
                            {size}
                        </button>
                    ))}
                    <br />
                </div>
                <br />
                <div className="quantity-div">
                    <input
                        type="number"
                        placeholder="1"
                        min="1"
                        onChange={handleQuantityChange}
                        className="quantity-input"
                        size="4"
                    />
                    <CartAdd
                        onItemAdd={handleItemAdd}
                        className="add-to-cart"
                        product={product}
                        selectedOptions={{
                            productId: product.id,
                            options: `${pickedSize} ${pickedColor}`,
                            quantity: quantity,
                        }}
                    />
                    <br />
                </div>
                <br />
                <div className="product-description-container">
                    <p className="product-description">{product.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductShowRight;
