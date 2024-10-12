// src/components/Product.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Import Sidebar
import './Products.css'; // Import CSS for styling

const Product = () => {
  const [products] = useState([
    { id: 1, name: 'CPU - Intel Core i7', price: 300 },
    { id: 2, name: 'GPU - NVIDIA RTX 3080', price: 700 },
    { id: 3, name: 'RAM - Corsair 16GB DDR4', price: 120 },
    { id: 4, name: 'Motherboard - ASUS ROG', price: 250 },
    { id: 5, name: 'SSD - Samsung 1TB NVMe', price: 150 },
    { id: 6, name: 'Power Supply - Corsair 750W', price: 100 },
    { id: 7, name: 'CPU Cooler - Noctua NH-D15', price: 90 },
    { id: 8, name: 'Case - NZXT H510', price: 80 },
    { id: 9, name: 'Monitor - LG 27-inch 144Hz', price: 300 },
    { id: 10, name: 'Keyboard - Razer BlackWidow', price: 130 },
    { id: 11, name: 'Mouse - Logitech G502', price: 50 },
    { id: 12, name: 'Headset - HyperX Cloud II', price: 100 },
    { id: 13, name: 'External HDD - Seagate 2TB', price: 70 },
    { id: 14, name: 'Thermal Paste - Arctic MX-4', price: 10 },
    { id: 15, name: 'Capture Card - Elgato HD60', price: 200 },
  ]);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar /> {/* Include Sidebar here */}
      <div className="product-container" style={{ marginLeft: '200px', padding: '20px' }}>
        <h2>Computer Parts for Sale</h2>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <button className="buy-button">Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
