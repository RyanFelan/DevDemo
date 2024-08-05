import React from 'react';
import { hats } from '../data/productData'; // Import product data

function Hats() {
  return (
    <div>
      <h2>Hats</h2>
      <div className="product-list">
        {hats.map((hat) => (
          <div key={hat.id} className="product-item">
            <img src={hat.image} alt={hat.name} />
            <h3>{hat.name}</h3>
            <p>{hat.price}</p>
            <button>Add to Cart</button> {/* Add functionality as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hats;
