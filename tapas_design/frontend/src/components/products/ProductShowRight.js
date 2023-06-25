const ProductShowRight = ({product}) => {
// console.log(product);
    return (
        <div className="show-product-container">
            <p>{product.name}</p>
            <br />
            <p>{product.price}</p>
            <br />
            <p>Afterpay available for orders over $35</p>
            <br />
            <p>{product.color}</p>
            <br />
            <button> Add To Cart </button>
            <br />

        </div>
    )
}

export default ProductShowRight