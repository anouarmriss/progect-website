import "./Home.css";
import { FeaturedProducts } from "../FeaturedProducts/FeaturedProducts.jsx";
import { Right24Px } from "../Right24Px/Right24Px.jsx";

export const Home = ({ className, ...props }) => {
  return (
    <div className={"home " + className}>
      <div className="header">
        <div className="rectangle-2"></div>
        <div className="group-2">
          <div className="home2">Home </div>
          <div className="shop">Shop </div>
          <div className="about">About </div>
          <div className="contact">Contact </div>
        </div>
        <div className="group-1">
          <img
            className="mdi-account-alert-outline"
            src="mdi-account-alert-outline0.svg"
          />
          <img className="akar-icons-search" src="akar-icons-search0.svg" />
          <img className="akar-icons-heart" src="akar-icons-heart0.svg" />
          <img
            className="ant-design-shopping-cart-outlined"
            src="ant-design-shopping-cart-outlined0.svg"
          />
          <div className="frame-168">
            <img
              className="meubel-house-logos-05"
              src="meubel-house-logos-050.png"
            />
            <div className="skin-clinic">Furniro </div>
          </div>
        </div>
      </div>
      <img className="mask-group" src="mask-group0.svg" />
      <div className="group-92">
        <div className="living">Living </div>
      </div>
      <img className="mask-group2" src="mask-group1.svg" />
      <div className="dining">Dining </div>
      <img className="image-living-room" src="image-living-room0.svg" />
      <img className="mask-group3" src="mask-group2.svg" />
      <div className="group-93">
        <div className="bedroom">Bedroom </div>
      </div>
      <div className="group-107">
        <div className="browse-the-range">Browse The Range </div>
        <div className="treating-all-skin-co">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </div>
      </div>
      <div className="show-more">
        <div className="rectangle-27"></div>
        <div className="show-more2">Show More </div>
      </div>
      <div className="frame-7">
        <div className="featured-products">
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
        <FeaturedProducts className="featured-products-instance"></FeaturedProducts>
        <FeaturedProducts className="featured-products-instance"></FeaturedProducts>
        <FeaturedProducts className="featured-products-instance"></FeaturedProducts>
      </div>
      <div className="frame-8">
        <FeaturedProducts className="featured-products-instance"></FeaturedProducts>
        <FeaturedProducts className="featured-products-instance"></FeaturedProducts>
        <FeaturedProducts className="featured-products-instance"></FeaturedProducts>
        <FeaturedProducts className="featured-products-instance"></FeaturedProducts>
      </div>
      <div className="title">Our Products </div>
      <div className="bg2"></div>
      <div className="products">
        <div className="image">
          <img className="rectangle-24" src="rectangle-240.png" />
          <div className="cta">
            <div className="rectangle-28"></div>
            <img className="right-16-px" src="right-16-px0.svg" />
          </div>
          <div className="content">
            <div className="rectangle-29"></div>
            <div className="frame-3">
              <div className="_01">01 </div>
              <img className="vector-1" src="vector-10.svg" />
              <div className="bed-room">Bed Room </div>
            </div>
            <div className="inner-peace">Inner Peace </div>
          </div>
        </div>
        <img className="rectangle-25" src="rectangle-250.png" />
        <img className="rectangle-26" src="rectangle-260.png" />
        <div className="indicator">
          <div className="active">
            <div className="ellipse-2"></div>
            <div className="ellipse-1"></div>
          </div>
          <div className="ellipse-12"></div>
          <div className="ellipse-22"></div>
          <div className="ellipse-32"></div>
        </div>
        <div className="group-13">
          <div className="ellipse-4"></div>
          <Right24Px className="right-24-px-instance"></Right24Px>
        </div>
      </div>
      <div className="cta2">
        <div className="rectangle-3"></div>
        <div className="explore-more">Explore More </div>
      </div>
      <div className="title2">
        <div className="title3">
          50+ Beautiful rooms <br />
          inspiration{" "}
        </div>
        <div className="subtitle">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you{" "}
        </div>
      </div>
      <div className="images2">
        <div className="rectangle-35"></div>
        <img className="rectangle-36" src="rectangle-360.png" />
        <img className="rectangle-38" src="rectangle-380.png" />
        <img className="rectangle-40" src="rectangle-400.png" />
        <img className="rectangle-39" src="rectangle-390.png" />
        <img className="rectangle-41" src="rectangle-410.png" />
        <img className="rectangle-44" src="rectangle-440.png" />
        <img className="rectangle-43" src="rectangle-430.png" />
        <img className="rectangle-45" src="rectangle-450.png" />
        <img className="rectangle-37" src="rectangle-370.png" />
      </div>
      <div className="title4">
        <div className="title5">Share your setup with </div>
        <div className="title6">#FuniroFurniture </div>
      </div>
      <div className="footer">
        <div className="rectangle-19"></div>
        <div className="group-32">
          <div className="_400-university-drive-suite-200-coral-gables-fl-33134-usa">
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA{" "}
          </div>
          <div className="funiro">Funiro. </div>
          <div className="group-31">
            <div className="group-28">
              <div className="group-26">
                <div className="group-24">
                  <div className="home3">Home </div>
                  <div className="shop2">Shop </div>
                  <div className="about2">About </div>
                  <div className="contact2">Contact </div>
                </div>
                <div className="links">Links </div>
              </div>
              <div className="group-27">
                <div className="help">Help </div>
                <div className="group-25">
                  <div className="payment-options">Payment Options </div>
                  <div className="returns">Returns </div>
                  <div className="privacy-policies">Privacy Policies </div>
                </div>
              </div>
            </div>
            <div className="group-30">
              <div className="newsletter">Newsletter </div>
              <div className="group-29">
                <div className="enter-your-email-address">
                  Enter Your Email Address{" "}
                </div>
                <div className="line-2"></div>
                <div className="subscribe">SUBSCRIBE </div>
                <div className="line-3"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-44">
          <div className="line-4"></div>
          <div className="_2023-furino-all-rights-reverved">
            2023 furino. All rights reverved{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
