import React from 'react';
import { shirts } from '../data/productData'; // Import product data

function Shirts() {
  return (
    <div>
      <h2>Shirts</h2>
      <div className="product-list">
        {shirts.map((shirt) => (
          <div key={shirt.id} className="product-item">
            <img src={shirt.image} alt={shirt.name} />
            <h3>{shirt.name}</h3>
            <p>{shirt.price}</p>
            <button>Add to Cart</button> {/* Add functionality as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shirts;
