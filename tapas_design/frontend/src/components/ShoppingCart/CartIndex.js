import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartItems } from "../../store/cartItems";
import CartIndexItem from "./CartIndexItem";

const CartIndex = () => {
    const dispatch = useDispatch();
    const cartItemsObj = useSelector((state) => state.cartIndex);

    useEffect(() => {
        dispatch(fetchCartItems());
    }, [dispatch]);


    const cartItems = Object.values(cartItemsObj)
    // console.log(cartItems);

    return (
        <div className="cart-index-wrapper">
            <p>THIS IS A TEST</p>
            {cartItems.map((item) => (
                <CartIndexItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default CartIndex;
