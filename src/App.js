import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist'; // Import the Wishlist component
import Navbar from './components/Navbar';
import Login from './components/Login'; // Import the Login component
import Footer from './components/Footer';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]); // State for wishlist

  const products = [
    { id: 1, name: 'Air Pods', price: 100, image: '/images/product1.jpg' },
    { id: 2, name: 'Bluetooth Speaker', price: 150, image: '/images/product2.jpg' },
    { id: 3, name: 'Speaker', price: 200, image: '/images/product3.jpg' },
    { id: 4, name: 'Smart Watch', price: 250, image: '/images/product4.jpg' },
    { id: 5, name: 'Mobile Phone', price: 300, image: '/images/product5.jpg' },
    { id: 6, name: 'Laptop', price: 100, image: '/images/product6.jpg' },
    { id: 7, name: 'Headphone', price: 150, image: '/images/product7.jpg' },
    { id: 8, name: 'Wireless Headset', price: 200, image: '/images/product8.jpg' },
    { id: 9, name: 'Camera', price: 250, image: '/images/product9.jpg' },
    { id: 10, name: 'Android TV', price: 300, image: '/images/product10.jpg' },
  ];

  // const addToCart = (product) => {
  //   setCartItems([...cartItems, product]);
  // };

  const addToCart = (product) => {
    const isAlreadyInCart = cartItems.find(item => item.id === product.id);
    if (!isAlreadyInCart) {
      setCartItems([...cartItems, product]);
    } else {
      alert("Added on Cart");
    }
  };
  

  const handleRemoveFromCart = (itemToRemove) => {
    setCartItems(cartItems.filter(item => item !== itemToRemove));
  };

  const addToWishlist = (product) => {
    setWishlistItems([...wishlistItems, product]);
  };

  const handleRemoveFromWishlist = (itemToRemove) => {
    setWishlistItems(wishlistItems.filter(item => item !== itemToRemove));
  };

  return (
    <Router>
      <div className="app">
        <Navbar cartCount={cartItems.length} wishlistCount={wishlistItems.length} />
        <Routes>
          <Route path="/" element={<Home products={products} addToCart={addToCart} addToWishlist={addToWishlist} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop products={products} addToCart={addToCart} addToWishlist={addToWishlist} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />} />
          {/* <Route path="/wishlist" element={<Wishlist wishlistItems={wishlistItems} handleRemoveFromWishlist={handleRemoveFromWishlist} />} /> */}
          <Route path="/wishlist" element={<Wishlist wishlistItems={wishlistItems} handleRemoveFromWishlist={handleRemoveFromWishlist} addToCart={addToCart} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
