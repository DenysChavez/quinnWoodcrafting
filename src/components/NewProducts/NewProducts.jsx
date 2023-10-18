import "./NewProducts.css";
import { Product } from "../../components/index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const NewProducts = ({ products }) => {

  return (
    <div className="wrapper">
      <div className="wrapper-inner">
        <h1 className="latest-product-title">LATEST PRODUCTS</h1>
        <div className="latest-products">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
