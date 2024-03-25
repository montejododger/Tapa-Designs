import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { deleteCartItem, updateCartItem } from "../../store/cartItems";

const CartIndexItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleIncrement = () => {
        const updatedItem = {
            ...item,
            quantity: item.quantity + 1,
        };
        dispatch(updateCartItem(updatedItem));
    };

    const handleDecrement = () => {
        if (item.quantity > 1) {
            const updatedItem = {
                ...item,
                quantity: item.quantity - 1,
            };
            dispatch(updateCartItem(updatedItem));
        }
    };

    const handleDeleteClick = () => {
        dispatch(deleteCartItem(item.id));
    };

    const options = item.options.split(" ");
    const price = item.productPrice;

    const photo = item.photo;

    return (
        <div className="cart-index-item-wrapper">
            <div className="cart-index-info-container">
                <ul key={item.id} className="flyout-items">
                    <li className="flyout-item-list">
                        <div className="flyout-media">
                            <img src={photo} alt="" />
                        </div>

                        <div className="flyout-info">
                            <h4 className="cart-product-name">
                                {item.productName}
                            </h4>
                            <div className="cart-item-options">
                                {options[1]} / {options[0]}
                            </div>
                            <button
                                className="cart-item-delete"
                                onClick={handleDeleteClick}
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                            <div className="flyout-item-quantity">
                                <div className="flyout-quantity-widget">
                                    <button
                                        className="cart-minus"
                                        onClick={handleDecrement}
                                    >
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <p className="cart-quantity-label">
                                        {item.quantity}
                                    </p>
                                    <button
                                        className="cart-plus"
                                        onClick={handleIncrement}
                                    >
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </div>
                            </div>
                            <div className="flyout-item-price">
                                <div className="cart-items-price-flyout">
                                    <span>${price}.00</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CartIndexItem;
