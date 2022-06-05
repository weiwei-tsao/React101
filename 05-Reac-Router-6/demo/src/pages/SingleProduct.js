import React from "react";
import { Link, useParams } from "react-router-dom";

import products from "../data";

export const SingleProduct = () => {
  // console.log(useParams());
  const { productId } = useParams();

  const product = products.find((item) => item.id === productId);

  return (
    <section className="section">
      <h2>Single Products Page</h2>
      <p>Product Id: {product.id}</p>
      <p>Product Name: {product.name}</p>
      <img src={`${product.image}`} alt={`${product.name}`} />
      <br />
      <Link to="/products" className="btn">
        Back Products Page
      </Link>
    </section>
  );
};
