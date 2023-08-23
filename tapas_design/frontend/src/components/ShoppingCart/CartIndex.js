import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartItems } from "../../store/cartItems";
import CartIndexItem from "./CartIndexItem";

import "../Navigation/NavBarCart.css";
import CartFooter from "./CartFooter";

const CartIndex = ({ toggleCart }) => {
    const dispatch = useDispatch();
    const cartItemsObj = useSelector((state) => state.cartItems);

    useEffect(() => {
        dispatch(fetchCartItems());
    }, [dispatch]);

    const cartItems = Object.values(cartItemsObj);

    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );
    const totalCost = cartItems.reduce(
        (total, item) => total + item.quantity * item.productPrice,
        0
    );

   


    return (
        <div className="cart-index-wrapper">
            {cartItems.length === 0 ? (
                <div className="flyout-empty-cart-msg">
                    <h4 className="empty-cart-notice">Your cart is empty!</h4>
                    <p className="add-favorites">
                        Add your favorite items to your cart.
                    </p>
                    <div className="cart-shop-now">
                        <Link to="/products" onClick={toggleCart}>
                            <p>Shop Now</p>
                        </Link>
                    </div>
                </div>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <div key={item.id}>
                            <CartIndexItem item={item} />
                        </div>
                    ))}
                    <CartFooter totalItems={totalItems} totalCost={totalCost} toggleCart={toggleCart}/>
                </>
            )}
        </div>
    );
};

export default CartIndex;
