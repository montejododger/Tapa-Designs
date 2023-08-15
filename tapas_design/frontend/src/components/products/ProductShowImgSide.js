const ProductShowImgSide = ({photos}) => {
    // console.log(photos);
    return (
        <section className="show-img-wrapper">
            <div className="show-img-container">
                {photos.map((photo, index) => (
                    <img className="show-img-item" src={photo} alt={`product-${index}`} key={index} />
                ))}
            </div>
        </section>
    );
};

export default ProductShowImgSide;

