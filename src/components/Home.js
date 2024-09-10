import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { FaHeart } from 'react-icons/fa'; // Importing the wishlist icon

function Home({ products, addToCart, addToWishlist }) {
  const navigate = useNavigate();
  const exchangeRate = 83; // 1 USD = 83 INR

  const handleShopNow = () => {
    navigate('/shop');
  };

  const handleAddToCart = (product) => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      addToCart(product);
      alert(`${product.name} added successfully to your cart!`);
      navigate('/cart'); // Navigate to the Cart page after adding to cart
    } else {
      alert('Please log in to add items to your cart.');
      navigate('/login');
    }
  };

  const handleAddToWishlist = (product) => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      addToWishlist(product);
      alert(`${product.name} added to your wishlist!`);
      navigate('/wishlist'); // Navigate to Wishlist page
    } else {
      alert('Please log in to add items to your wishlist.');
      navigate('/login');
    }
  };

  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-text">
          <h1>Welcome to OnShopIndia</h1>
          <button className="shop-now-btn" onClick={handleShopNow}>
            Shop Now
          </button>
        </div>
      </header>

      <section className="featured-products">
        <h2>Our Products</h2>
        <div className="product-grid">
          {products.slice(0, 10).map((product) => (
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
      </section>
    </div>
  );
}

export default Home;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';
// import { FaHeart } from 'react-icons/fa'; // Importing the wishlist icon

// function Home({ products, addToCart, addToWishlist }) {
//   const navigate = useNavigate();
//   const exchangeRate = 83; // 1 USD = 83 INR

//   const handleShopNow = () => {
//     navigate('/shop');
//   };

//   const handleAddToCart = (product) => {
//     if (localStorage.getItem('isLoggedIn') === 'true') {
//       addToCart(product);
//       alert(`${product.name} added successfully to your cart!`);
//       navigate('/cart'); // Navigate to the Cart page after adding to cart
//     } else {
//       alert('Please log in to add items to your cart.');
//       navigate('/login');
//     }
//   };

//   const handleAddToWishlist = (product) => {
//     if (localStorage.getItem('isLoggedIn') === 'true') {
//       addToWishlist(product);
//       alert(`${product.name} added to your wishlist!`);
//       navigate('/wishlist'); // Navigate to Wishlist page
//     } else {
//       alert('Please log in to add items to your wishlist.');
//       navigate('/login');
//     }
//   };

//   return (
//     <div className="home-container">
//       <header className="hero-section">
//         <div className="hero-text">
//           <h1>Welcome to OnShopIndia</h1>
//           <button className="shop-now-btn" onClick={handleShopNow}>
//             Shop Now
//           </button>
//         </div>
//       </header>

//       <section className="featured-products">
//         <h2>Our Products</h2>
//         <div className="product-grid">
//           {products.slice(0, 10).map((product, index) => (
//             <div key={index} className="product-card">
//               <img src={product.image} alt={product.name} className="product-image" />
//               <h3>{product.name}</h3>
//               <p>₹{(product.price * exchangeRate).toFixed(2)}</p> {/* Convert price to rupees */}
//               <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
//                 Add to Cart
//               </button>
//               <button className="add-to-wishlist-btn" onClick={() => handleAddToWishlist(product)}>
//                 <FaHeart />
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;
