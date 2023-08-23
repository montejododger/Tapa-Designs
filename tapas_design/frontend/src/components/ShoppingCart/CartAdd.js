import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCartItem } from "../../store/cartItems";

const CartAdd = ({ product, selectedOptions, onItemAdd }) => {

    const dispatch = useDispatch();
    const [errors, setErrors] = useState("");
    const currentUser = useSelector((state) => state.session.user);
    const [size, color] = selectedOptions.options.split(" ");

    const handleClick = () => {
        if (!currentUser) {
            setErrors("You must be logged in to add items to the cart.");
            return;
        }
        
        if (!size || !color) {
            setErrors("Please select a size and color");
            return;
        }

        const item = {
            product_id: product.id,
            options: selectedOptions.options,
            quantity: selectedOptions.quantity,
        };
        // debugger
        dispatch(createCartItem(item));
        setErrors("");
        onItemAdd();
    };

    return (
        <div className="cart-container">
            {errors && <div className="cart-errors">{errors}</div>}
            <button className="cart-add" onClick={handleClick}>ADD TO CART</button>
        </div>
    );
};

export default CartAdd;
