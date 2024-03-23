import React, { useState } from 'react';
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import './App.scss';
function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  return (
    <div>
      <Header clickChange={setSelectedCategory} />
      <ProductCard kategori={selectedCategory} />
    </div>
  );
}
export default App;