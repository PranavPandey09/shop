// import React from 'react';
// import './Cart.css';

// function Cart({ cartItems, handleRemoveFromCart }) {
//   const exchangeRate = 83; // 1 USD = 83 INR

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + (item.price * exchangeRate), 0);
//   };

//   const handleCheckout = () => {
//     alert('Your Order placed');
//     // Additional logic for checkout can be added here
//   };

//   return (
//     <div className="cart-container">
//       <h1>Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <div className="cart-items">
//           {cartItems.map((item, index) => (
//             <div key={index} className="cart-item">
//               <img src={item.image} alt={item.name} className="cart-item-image" />
//               <div className="cart-item-details">
//                 <h3>{item.name}</h3>
//                 <p>₹{(item.price * exchangeRate).toFixed(2)}</p> {/* Convert price to rupees */}
//                 <button className="remove-btn" onClick={() => handleRemoveFromCart(item)}>Remove</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//       <div className="cart-total">
//         <h3>Total: ₹{calculateTotal().toFixed(2)}</h3> {/* Convert total to rupees */}
//         <button className="checkout-btn" onClick={handleCheckout}>Buy Now</button>
//       </div>
//     </div>
//   );
// }

// export default Cart;


import React from 'react';
import './Cart.css';

function Cart({ cartItems, handleRemoveFromCart }) {
  const exchangeRate = 83; // 1 USD = 83 INR

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * exchangeRate), 0);
  };

  const handleCheckout = () => {
    alert('Your Order placed');
    // Additional logic for checkout can be added here
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>₹{(item.price * exchangeRate).toFixed(2)}</p> {/* Convert price to rupees */}
                <button className="remove-btn" onClick={() => handleRemoveFromCart(item)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-total">
        <h3>Total: ₹{calculateTotal().toFixed(2)}</h3> {/* Convert total to rupees */}
        <button className="checkout-btn" onClick={handleCheckout}>Buy Now</button>
      </div>
    </div>
  );
}

export default Cart;
