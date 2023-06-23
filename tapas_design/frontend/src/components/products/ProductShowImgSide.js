const ProductShowImgSide = ({photos}) => {

    return (
        <section className="show-img-wrapper">
            <div className="show-img-container">
                <img src={photos} alt="" />
                <img src={photos} alt="" />
            </div>
        </section>
    );
};

export default ProductShowImgSide;
