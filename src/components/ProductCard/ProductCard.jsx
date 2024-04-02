import React, { useState } from "react";
import { products } from "../../helper/data";
import "./ProductCard.scss";

function ProductCard({ kategori }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [likedProducts, setLikedProducts] = useState([]);

  const handleLike = (id) => {
    const updatedLikedProducts = likedProducts.includes(id)
      ? likedProducts.filter((productId) => productId !== id)
      : [...likedProducts, id];
  
    setLikedProducts(updatedLikedProducts);
    console.log(likedProducts);
  };
  

  const filteredProducts =
    kategori === "all"
      ? products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : products.filter(
          (product) =>
            product.category === kategori &&
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Ürün ara..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="tasiyici">
        {filteredProducts.map(({ title, id, price, category, image }) => (
          <div className="anaDiv" key={id}>
            <div className="like-div"><span className="price">{price} $</span>
            <span
              className="like"
              onClick={() => handleLike(id)}
            >
              {likedProducts.includes(id) ? "❤️" : "🤍"}
            </span></div>
            <div className="img">
              <img src={image} alt={title} />
            </div>
            <div className="title">
              <h4>{title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
