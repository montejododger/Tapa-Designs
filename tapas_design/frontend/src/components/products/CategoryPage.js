// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { createSelector } from "reselect";
// import { useParams } from "react-router-dom";
// import { fetchCategoryProducts } from "../../store/productsReducer";
// import ProductIndexItem from "./ProductIndexItem";
// import "./ProductIndex.css";

// const selectProducts = createSelector(
//     (state) => state.products,
//     (products) => Object.values(products)
// );

// function CategoryPage() {
//     const dispatch = useDispatch();
//     const { category } = useParams();
//     const products = useSelector(selectProducts);

//     useEffect(() => {
//         dispatch(fetchCategoryProducts(category));
//     }, [dispatch, category]);

//     if (products === undefined) return null;

//     return (
//         <section className="product-index-wrapper">
//             {products.map((product) => (
//                 <ProductIndexItem product={product} key={product.id} />
//             ))}
//         </section>
//     );
// }

// export default CategoryPage;