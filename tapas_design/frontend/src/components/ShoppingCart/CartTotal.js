import React, { useState} from "react";
import { UseSelector, useSelector } from "react-redux"

const cartTotal = () => {
    const cartItems = ((state) => state.cart)


    return (
        <div className="cartTotal-container">

        </div>

    )
}

export default cartTotal;