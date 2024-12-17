import "./FeaturedProducts.css";

export const FeaturedProducts = ({ className, ...props }) => {
  return (
    <div className={"featured-products " + className}>
      <div className="bg"></div>
      <div className="price">
        <div className="frame-6">
          <div className="fix-price">Rp 2.500.000 </div>
          <div className="fix-price2">Rp 3.500.000 </div>
        </div>
      </div>
      <div className="product-name">
        <div className="product-name2">Syltherine </div>
        <div className="sort-description">Stylish cafe chair </div>
      </div>
      <img className="image-8" src="image-80.png" />
      <img className="image-7" src="image-70.png" />
      <img className="image-6" src="image-60.png" />
      <img className="image-5" src="image-50.svg" />
      <img className="image-4" src="image-40.png" />
      <img className="image-3" src="image-30.png" />
      <img className="image-2" src="image-20.png" />
      <img className="image-1" src="image-10.png" />
      <div className="discount">
        <div className="ellipse-3"></div>
        <div className="_30">-30% </div>
      </div>
    </div>
  );
};
