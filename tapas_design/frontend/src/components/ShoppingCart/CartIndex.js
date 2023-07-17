import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartItems } from "../../store/cartItems";
import CartIndexItem from "./CartIndexItem";

const CartIndex = () => {
    const dispatch = useDispatch();
    const cartItemsObj = useSelector((state) => state.cartIndex);
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
            <div>
                
            </div>
        </>
    );
};

export default CartIndex;
