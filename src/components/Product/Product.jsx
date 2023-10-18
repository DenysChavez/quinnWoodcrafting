import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  console.log(product.img)
  return (
    <div className="product">
      <img className="product-img" src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">{product.price}</p>
    </div>
  );
};

export default Product;
