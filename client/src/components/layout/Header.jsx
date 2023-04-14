import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { cartCount, openCart } = useCart();
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const checkCartClick = () => {
    console.log('cart clicked from header');
    openCart();
  };

  return (
    <header className="header">
      <button 
        id="menuBtn" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      
      <nav>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#men">For Men</a></li>
          <li><a href="#women">For Women</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      
      <div className="logo"></div>
      
      <div className="header-right">
        {isAuthenticated && (
          <div className="user-menu" onClick={() => setUserMenuOpen(!userMenuOpen)}>
            <span className="user-email">{user?.email?.split('@')[0]}</span>
            {userMenuOpen && (
              <div className="user-dropdown">
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        )}
        
        <div className="cart" onClick={checkCartClick} style={{cursor: 'pointer'}}>
          🛍 <span id="cart-count">{cartCount}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;