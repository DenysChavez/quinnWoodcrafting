import "./NewProducts.css";
import { Product } from "../../components/index";

const NewProducts = ({ products }) => {
  console.log(products);
  return (
    <div className="latest-products">
      <h1>LATEST PRODUCTS</h1>
      <div className="products-list">
        <div className="products-grid-inner">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
