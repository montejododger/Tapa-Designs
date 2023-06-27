import React from "react";

import { useDispatch } from "react-redux";
import { createCartItem } from "../../store/cartItems";

const CartAdd = ({ product, selectedOptions }) => {
    const dispatch = useDispatch();


    const handleClick = () => {
        const item = {
            product_id: product.id,
            options: selectedOptions.options,
            quantity: selectedOptions.quantity
        }
        dispatch(createCartItem(item));
    };

    return <button onClick={handleClick}>ADD TO CART</button>;
};

export default CartAdd;
