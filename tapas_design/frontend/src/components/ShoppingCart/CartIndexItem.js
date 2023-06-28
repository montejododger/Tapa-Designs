import React from "react";
import { useDispatch } from "react-redux";
import { deleteCartItem, updateCartItem } from "../../store/cartItems";

const CartIndexItem = ({ item }) => {
    const dispatch = useDispatch()
    console.log(item);
    
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
                <ul>
                    <li>product ID: {item.productId}</li>
                    <li> Options: {item.options}</li>
                    <li>{item.price}</li>
                </ul>
            </div>
            <div className="index-item-crud-container">
                <label>
                    Quantity:
                    <input
                        type="number"
                        value={item.quantity}
                        onChange={handleQuantityChange}
                    />
                </label>
                <button onClick={handleDeleteClick}>DELETE</button>
            </div>
        </div>
    );
};

export default CartIndexItem;
