import React, { useState } from "react";
import { products } from "../../helper/data";
import "./ProductCard.scss";

function ProductCard({ kategori }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [likedProducts, setLikedProducts] = useState([]); //like edilen ürünleri tutmak için state tanımladık. ilk olarak like edilen hiç olmadığı için boş array ilk başlangıç değerimiz.

  const handleLike = (id) => { // Bu fonksiyon bir ürün ID'sini parametre olarak alır ve bu ürünü beğenme veya beğenmekten vazgeçme işlemini gerçekleştirir.
    const updatedLikedProducts = likedProducts.includes(id)  // öncelikle likedProducts dizisinde tıklanan ürün ID'sinin olup olmadığı kontrol edilir (likedProducts.includes(id)). Eğer bu ürün ID'si likedProducts dizisinde varsa, bu ürünün beğenilmesi geri alınır (filtrelenerek listeden çıkarılır); yoksa, bu ürün beğenilir (listeye eklenir). yani kalp kırmızı ise zaten beyaza geri çevirir. değil ise ekler.
      ? likedProducts.filter((productId) => productId !== id) 
      : [...likedProducts, id]; //burda spread kullanarak gelen yani like edilen ID yi likedProducts dizisine ekliyoruz.

    setLikedProducts(updatedLikedProducts);
    console.log(likedProducts);
  };

  const filteredProducts =
    kategori === "all" // Eğer kategori "all" ise, yani kullanıcı herhangi bir kategori seçmemişse, tüm ürünler products dizisinden geçirilir.
      ? products.filter(
          (product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) // büyük-küçük harf duyarlılığını ortadan kaldırmak için kullandık
        )
      : products.filter(
          //Eğer kategori "all" değilse, yani kullanıcı belirli bir kategori seçmişse, sadece o kategoriye ait ürünler listeye dahil edilir.
          (product) =>
            product.category === kategori && //burada product.category === kategori ve product.title.toLowerCase().includes(searchTerm.toLowerCase()) koşullarını sağlayan ürünleri listeye dahil ederek filtreleme yaptık. 
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

  const handleSearchChange = (e) => {
    //! kullanıcı metin girdiğinde veya input alanındaki değeri değiştirdiğinde bu fonksiyon çalışır.

    setSearchTerm(e.target.value); //searchTerm adlı state'i günceller. Bu durumda, kullanıcı arama kutusuna metin girdiği veya değiştirdiği zaman, bu metin searchTerm state'ine atanır.
  };

  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Ürün ara..."
          value={searchTerm} //input alanına yazılan metni yakalamak için kullanılır
          onChange={handleSearchChange}
        />
      </div>
      <div className="tasiyici">
        {filteredProducts.map(({ title, id, price, category, image }) => (
          <div className="anaDiv" key={id}>
            <div className="like-div">
              <span className="price">{price} $</span>
              <span className="like" onClick={() => handleLike(id)}>
        {likedProducts.includes(id) ? "❤️" : "🤍"} {/* likedProducts  */}
              </span>
            </div>
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
