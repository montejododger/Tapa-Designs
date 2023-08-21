import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
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

    // console.log(item.productPhotos);

    // const baseUrl = "http://127.0.0.1:5500"
    // const imgUrl = baseUrl + item.productPhotos

    const options = item.options.split(" ");

    return (
        <div className="cart-index-item-wrapper">
            <div className="cart-flyout-announcement">
                Create an account and spend $250 per rolling year to become a
                VIP and earn 2 points per $1 spent, Free U.S. Shipping &
                Returns, and more.
            </div>
            <div className="cart-index-info-container">
                <ul key={item.id} className="flyout-items">
                    <li className="flyout-item-list">
                        <div className="flyout-media">
                            {/* <img src={} alt="" /> */}
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
                                    <button className="cart-minus">
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <p className="cart-quantity-label">{item.quantity}</p>
                                    <button className="cart-add"></button>
                                </div>
                            </div>
                            <div className="flyout-item-price"></div>
                        </div>
                    </li>
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

// return (
//     <div className="cart-index-item-wrapper">
//         <div className="cart-flyout-announcement">
//             Create an account and spend $250 per rolling year to become a
//             VIP and earn 2 points per $1 spent, Free U.S. Shipping &
//             Returns, and more.
//         </div>
//         <div className="cart-index-info-container">
//             <ul key={item.id} className="flyout-items">
//                 <li>{item.productName}</li>
//                 <li>${(item.productPrice * item.quantity).toFixed(2)}</li>
//                 <li> Options: {item.options}</li>
//                 <li>{item.price}</li>
//             </ul>
//         </div>
//         <div className="index-item-crud-container">
//             <label className="quantity-label">
//                 Quantity:{" "}
//                 <input
//                     type="number"
//                     min="1"
//                     placeholder={item.quantity}
//                     // value={item.quantity}
//                     onChange={handleQuantityChange}
//                     className="quantity-show"
//                 />
//                 <br />
//             </label>
//             <button onClick={handleDeleteClick}>DELETE</button>
//         </div>
//     </div>
// );

// id
// :
// 4
// options
// :
// "S Sand"
// productId
// :
// 1
// productName
// :
// "DIRT SHIRT - SHORT SLEEVE - MEN'S"
// productPhotos
// :
// "/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--09c045433aaf9a1f40f3e82d8353e5ca81187c05/dirt_hoodie_back.webp"
// productPrice
// :
// 89
// quantity
// :
// 1
