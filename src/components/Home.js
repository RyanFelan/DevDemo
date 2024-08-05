import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css'; // Import the styles.css file

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Welcome to Our Clothing Shop</h2>
      <div className="tiles">
        <div className="tile">
          <div className="tile-content">
            <img src="/images/Shirt4.webp" alt="Shirts" />
            <div className="text-content">
              <button onClick={() => navigate('/shirts')}>Shop Shirts</button>
            </div>
          </div>
        </div>
        <div className="tile">
          <div className="tile-content">
            <img src="/images/Shorts4.webp" alt="Shorts" />
            <div className="text-content">
              <button onClick={() => navigate('/shorts')}>Shop Shorts</button>
            </div>
          </div>
        </div>
        <div className="tile">
          <div className="tile-content">
            <img src="/images/Hat1.webp" alt="Hats" />
            <div className="text-content">
              <button onClick={() => navigate('/hats')}>Shop Hats</button>
            </div>
          </div>
        </div>
      </div>
      <img src="/images/image1.png" alt="test" />
    </div>
  );
}

export default Home;
