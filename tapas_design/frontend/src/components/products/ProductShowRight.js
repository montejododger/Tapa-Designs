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
        const value = parseInt(e.target.value, 10)

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
                <p>Available sizes:</p>
                <br />
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
                <br />

                <p>Quantity:</p>
                <br />
                <br/>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    onChange={handleQuantityChange}
                    className="quantity-show"
                />
                <br />
                <br />
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
        </div>
    );
};

export default ProductShowRight;
