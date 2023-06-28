import React from "react";
import { useDispatch } from "react-redux";
import { deleteCartItem, updateCartItem } from "../../store/cartItems";

const CartIndexItem = ({ item }) => {
    const dispatch = useDispatch;

    const handleQuantityChange = (e) => {
        const updatedItem = {
            ...item,
            quantity: e.target.value,
        };
        dispatch(updateCartItem(updatedItem));
    };

    const handleDeleteClick = () => {
        dispatch(deleteCartItem(item.id));
    };

    return (
        <div className="cart-index-item-wrapper">
            <div className="cart-index-info-container">
                <p>product ID: {item.productId}</p>
                <p> Options: {item.options.split(",")}</p>
            </div>
            <div className="index-item-crud-container">
                <label>
                    Quantity:
                    <input type="number" value={item.quantity} onChange={handleQuantityChange} />
                </label>
                <button onClick={handleDeleteClick}>DELETE</button>
            </div>
        </div>
    );
};

export default CartIndexItem;
