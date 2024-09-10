// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Wishlist.css'; // Create this CSS file for styling


// function Wishlist({ wishlistItems, handleRemoveFromWishlist }) {
//     // eslint-disable-next-line
//   const navigate = useNavigate();

//   return (
//     <div className="wishlist-container">
//       <h1>Your Wishlist</h1>
//       <div className="product-grid">
//         {wishlistItems.length === 0 ? (
//           <p>No Items In Your Wishlist.</p>
//         ) : (
//           wishlistItems.map((product) => (
//             <div key={product.id} className="product-card">
//               <img src={product.image} alt={product.name} />
//               <h3>{product.name}</h3>
//               <p>₹{product.price}</p>
//               <button onClick={() => handleRemoveFromWishlist(product)}>Remove from Wishlist</button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default Wishlist;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Wishlist.css'; // Make sure this CSS file is created

// function Wishlist({ wishlistItems, handleRemoveFromWishlist, handleAddToCart }) {
//    // eslint-disable-next-line
//   const navigate = useNavigate();

//   return (
//     <div className="wishlist-container">
//       <h1>Your Wishlist</h1>
//       <div className="product-grid">
//         {wishlistItems.length === 0 ? (
//           <p>No Items In Your Wishlist.</p>
//         ) : (
//           wishlistItems.map((product) => (
//             <div key={product.id} className="product-card">
//               <img src={product.image} alt={product.name} />
//               <h3>{product.name}</h3>
//               <p>₹{product.price}</p>
//               <div className="wishlist-buttons">
//                 <button 
//                   onClick={() => handleRemoveFromWishlist(product)} 
//                   className="remove-btn"
//                 >
//                   Remove from Wishlist
//                 </button>
//                 <button 
//                   onClick={() => handleAddToCart(product)} 
//                   className="add-cart-btn"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default Wishlist;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Wishlist.css'; // Create this CSS file for styling

function Wishlist({ wishlistItems, handleRemoveFromWishlist, addToCart }) {
  // eslint-disable-next-line
  const navigate = useNavigate();

  return (
    <div className="wishlist-container">
      <h1>Your Wishlist</h1>
      <div className="product-grid">
        {wishlistItems.length === 0 ? (
          <p>No Items In Your Wishlist.</p>
        ) : (
          wishlistItems.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <button onClick={() => handleRemoveFromWishlist(product)}>Remove from Wishlist</button>
              {/* Add to Cart button */}
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Wishlist;
