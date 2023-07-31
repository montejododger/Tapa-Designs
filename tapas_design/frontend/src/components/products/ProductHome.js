import ProductIndex from "./ProductIndex";
import ProductSidePanel from "./ProductSidePanel";
import './ProductIndex.css'

const ProductHome = () => {
    return (
        <section className="products-wrapper">
            {/* <ProductSidePanel /> */}
            <ProductIndex />
        </section>
    );
};

export default ProductHome;
