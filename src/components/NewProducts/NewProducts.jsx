import "./NewProducts.css";
import { Product } from "../../components/index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const NewProducts = ({ products }) => {

  return (
    <div className="wrapper">
      <h1 className="latest-product-title wrapper-inner">LATEST PRODUCTS</h1>
      <div className="wrapper-inner contenido">
        <div className="carrousel">
          {products.map((product) => (
            <Product className="card" product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
