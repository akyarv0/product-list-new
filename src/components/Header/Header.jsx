import React from 'react';

import { categories } from '../../helper/data';
function Header({ clickChange }) {
  return (
    <div>
      <h1>Product List</h1>
      <ul style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        {categories.map((kategori, index) => (
          <li key={index} style={{ listStyleType: "none" }}>
            <button
        
              onClick={() => clickChange(kategori)}
            >
              {kategori}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Header