import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCartItem } from "../../store/cartItems";

const CartAdd = ({ product, selectedOptions, onItemAdd}) => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState("");
    const currentUser = useSelector((state) => state.session.user);
    const [size, color] = selectedOptions.options.split(" ")


    const handleClick = () => {
        if (!currentUser) {
            setErrors(
                "Please log in or create an account to add items to the cart."
            );
            return;
        }
        // console.log(product);
        // console.log(selectedOptions);
        // console.log(selectedOptions.options);

        if (selectedOptions.options.split(" ").length !== 2) {
            setErrors(
                "Please select both a size and color before adding to the cart."
            );
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
        onItemAdd()
    };

    const isDisabled = !(size && color)

    return (
        <div>
            {errors && <p>{errors}</p>}
            <button onClick={handleClick} disabled={isDisabled}>ADD TO CART</button>
        </div>
    )
};

export default CartAdd;
