import React from 'react';
import { products } from "../../helper/data";
import "./ProductCard.scss";
function ProductCard({ kategori }) {
  const filteredProducts = kategori === "all" ? products : products.filter((product) => product.category === kategori);
  return (
    <div className="tasiyici">
      {filteredProducts.map(({ title, id, price, category, image }) => (
        <div className="anaDiv" key={id}>
          <div className="img">
            <img src={image} alt={title} />
            <p>{price} $</p>
          </div>
          <div className="title">
            <h4>{title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ProductCard;