import "./NewProducts.css";
import { Product } from "../../components/index";

const NewProducts = ({ products }) => {
  console.log(products);
  return (
    <div className="wrapper latest-products">
      <div className="wrapper-inner">
        <h1>LATEST PRODUCTS</h1>
        <div className="products-list">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
