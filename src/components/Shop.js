import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Shop.css';
import { FaHeart } from 'react-icons/fa'; // Importing the wishlist icon

function Shop({ products, addToCart, addToWishlist }) {
  const navigate = useNavigate();
  const exchangeRate = 83; // 1 USD = 83 INR

  const handleAddToCart = (product) => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      addToCart(product);
      alert(`${product.name} added successfully to your cart!`);
      navigate('/cart');
    } else {
      alert('Please log in to add items to your cart.');
      navigate('/login');
    }
  };

  const handleAddToWishlist = (product) => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      addToWishlist(product);
      alert(`${product.name} added to your wishlist!`);
      navigate('/wishlist');
    } else {
      alert('Please log in to add items to your wishlist.');
      navigate('/login');
    }
  };

  return (
    <div className="shop-container">
      <h1>All Electronic Items</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{(product.price * exchangeRate).toFixed(2)}</p>
            <div className="product-actions">
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              <FaHeart className="wishlist-icon" onClick={() => handleAddToWishlist(product)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
