import React, { useState } from "react";
// import { UseSelector, useSelector } from "react-redux";
import CartAdd from "../ShoppingCart/CartAdd";
import StarAvg from "../Reviews/ReviewStars/StarAvg";
import ReviewTotal from "../Reviews/ReviewTotal";

const ProductShowRight = ({ product }) => {
    const [pickedSize, setSize] = useState("");
    const [pickedColor, setColor] = useState("");
    const [quantity, setQuantity] = useState("1");

    const sizes = product.size.split(" ");
    const colors = product.color.split(" ");

    const handleItemAdd = () => {


        setSize("");
        setColor("");
        setQuantity("");
    };

    const handleSizeClick = (size) => {
        setSize(size);
    };

    const handleColorClick = (color) => {
        setColor(color);
    };

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value, 10);

        // debugger
        if (value === "") {
            setQuantity("");
        } else {
            const numericValue = parseInt(value, 10);
            if (!isNaN(numericValue) && numericValue > 0) {
                setQuantity(numericValue);
            } else {
                setQuantity("");
            }
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
                        placeholder={"1"}
                        value={quantity}
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
                            quantity: quantity === "" ? 1 : quantity,
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
