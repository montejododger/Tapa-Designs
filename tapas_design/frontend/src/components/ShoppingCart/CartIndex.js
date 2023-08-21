import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartItems } from "../../store/cartItems";
import CartIndexItem from "./CartIndexItem";

const CartIndex = ({ toggleCart }) => {
    const dispatch = useDispatch();
    const cartItemsObj = useSelector((state) => state.cartItems);

    useEffect(() => {
        dispatch(fetchCartItems());
    }, [dispatch]);

    const cartItems = Object.values(cartItemsObj);

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
                cartItems.map((item) => {
                    return <CartIndexItem key={item.id} item={item} />;
                })
            )}
        </div>
    );
};

export default CartIndex;
