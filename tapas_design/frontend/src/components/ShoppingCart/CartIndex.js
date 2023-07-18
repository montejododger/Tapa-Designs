import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartItems } from "../../store/cartItems";
import CartIndexItem from "./CartIndexItem";

const CartIndex = () => {
    const dispatch = useDispatch();
    const cartItemsObj = useSelector((state) => state.cartItems);
    // const [cartTrigger, setCartTrigger] = useState(false);

    useEffect(() => {
        dispatch(fetchCartItems());
    }, [dispatch]);

    const cartItems = Object.values(cartItemsObj);

    return (
        <>
            <div className="cart-index-wrapper">
                {cartItems.map((item) => {
                    return <CartIndexItem key={item.id} item={item} />;
                })}
            </div>
        </>
    );
};

export default CartIndex;
