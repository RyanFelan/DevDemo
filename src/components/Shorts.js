import React from 'react';
import { shorts } from '../data/productData'; // Import product data

function Shorts() {
  return (
    <div>
      <h2>Shorts</h2>
      <div className="product-list">
        {shorts.map((short) => (
          <div key={short.id} className="product-item">
            <img src={short.image} alt={short.name} />
            <h3>{short.name}</h3>
            <p>{short.price}</p>
            <button>Add to Cart</button> {/* Add functionality as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shorts;
