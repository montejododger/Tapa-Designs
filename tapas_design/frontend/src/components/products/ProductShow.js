import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/productsReducer";
import ProductShowImgSide from "./ProductShowImgSide";
import "./ProductShow.css";

function ProductShow() {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const product = useSelector((state) => state.products[productId]);

    useEffect(() => {
        if (productId) {
            dispatch(fetchProduct(productId));
        }
    }, [dispatch, productId]);

    if (product === undefined) {
        return null;
    }

    return (
        <div className="product-show-wrapper">
            <ProductShowImgSide photos={product.photos} />
        </div>
    );
}


export default ProductShow;
