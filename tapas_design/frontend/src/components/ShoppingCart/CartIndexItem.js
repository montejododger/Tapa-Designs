import React from "react";
import { useDispatch } from "react-redux";
import { deleteCartItem, updateCartItem } from "../../store/cartItems";

const CartIndexItem = ({ item }) => {
    const dispatch = useDispatch();
    // console.log(item);


    const handleQuantityChange = (e) => {
        const updatedItem = {
            ...item,
            quantity: Number(e.target.value),
        };
        // console.log(updatedItem);
        dispatch(updateCartItem(updatedItem));
    };

    const handleDeleteClick = () => {
        dispatch(deleteCartItem(item.id));
    };

    return (
        <div className="cart-index-item-wrapper">
            <div className="cart-index-info-container">
                <ul>
                    <li>{item.productName}</li>
                    <li>${item.productPrice}.00</li>
                    <li> Options: {item.options}</li>
                    <li>{item.price}</li>
                </ul>
            </div>
            <div className="index-item-crud-container">
            <label className='quantity-label'>Quantity:
                                <select className='quantity-select' value={item.quantity} onChange={handleQuantityChange}>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                </select>
                            </label>
                <button onClick={handleDeleteClick}>DELETE</button>
            </div>
        </div>
    );
};

export default CartIndexItem;


