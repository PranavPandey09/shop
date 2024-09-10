import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar({ cartItemsCount, wishlistItemsCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">OnShopIndia</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="navbar-icons">
        {/* Wishlist Icon */}
        <Link to="/wishlist" className="navbar-icon">
          <FontAwesomeIcon icon={faHeart} />
          {wishlistItemsCount > 0 && <span className="badge">{wishlistItemsCount}</span>}
        </Link>
        {/* Cart Icon */}
        <Link to="/cart" className="navbar-icon">
          <FontAwesomeIcon icon={faShoppingCart} />
          {cartItemsCount > 0 && <span className="badge">{cartItemsCount}</span>}
        </Link>
        {/* Login Icon */}
        <Link to="/login" className="navbar-icon">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
