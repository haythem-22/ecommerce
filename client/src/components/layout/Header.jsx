import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {cartCount, openCart} = useCart()

  const checkCartClick = () =>{
    console.log('cart clicked from header')
    openCart()
  }

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
      
      <div className="cart" onClick={openCart} style={{cursor: 'pointer'}}>
        🛍 <span id="cart-count">{cartCount}</span>
      </div>
    </header>
  );
};

export default Header;