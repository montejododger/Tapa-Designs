import React from "react";
import { useDispatch } from "react-redux";
import { deleteCartItem, updateCartItem } from "../../store/cartItems";

const CartIndexItem = ({ item }) => {
    const dispatch = useDispatch();
    // console.log(item);

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);

        if (!isNaN(value) && e.target.value > 0) {
            const updatedItem = {
                ...item,
                quantity: Number(e.target.value),
            };
            dispatch(updateCartItem(updatedItem));
        }
    };

    const handleDeleteClick = () => {
        dispatch(deleteCartItem(item.id));
    };

    // console.log(item);
    // console.log(typeof item.productPrice);
    // console.log(typeof item.quantity);
    return (
        <div className="cart-index-item-wrapper">
            <div className="cart-index-info-container">
                <ul key={item.id}>
                    <li>{item.productName}</li>
                    <li>${(item.productPrice * item.quantity).toFixed(2)}</li>
                    <li> Options: {item.options}</li>
                    <li>{item.price}</li>
                </ul>
            </div>
            <div className="index-item-crud-container">
                <label className="quantity-label">
                    Quantity:{" "}
                    <input
                        type="number"
                        min="1"
                        placeholder={item.quantity}
                        // value={item.quantity}
                        onChange={handleQuantityChange}
                        className="quantity-show"
                    />
                    <br />
                </label>
                <button onClick={handleDeleteClick}>DELETE</button>
            </div>
        </div>
    );
};

export default CartIndexItem;
