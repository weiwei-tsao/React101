import React from "react";
import { Link } from "react-router-dom";

import products from "../data";

export const Products = () => {
  return (
    <div className="products">
      {products.map((product, index) => {
        return (
          <article key={product.id}>
            <h5>{product.name}</h5>
            <Link to={`/products/${product.id}`}>More Info</Link>
          </article>
        );
      })}
    </div>
  );
};
