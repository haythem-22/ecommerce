import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Hero from '../../components/home/Hero';
import Bestsellers from '../../components/home/Bestsellers';
import Men from '../../components/home/Men';
import Women from '../../components/home/Women';
import About from '../../components/home/About';
import Reviews from '../../components/home/Reviews';
import Newsletter from '../../components/home/Newsletter';

console.log('Header:', Header)
console.log('Footer:', Footer)
console.log('Hero:', Hero)
console.log('Bestsellers:', Bestsellers)
console.log('Men:', Men)
console.log('Women:', Women)
console.log('About:', About)
console.log('Reviews:', Reviews)
console.log('Newsletter:', Newsletter)
const HomePage = () => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartCount(prev => prev + 1);
    setCartItems([...cartItems, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div>
      <Header cartCount={cartCount} />
      <Hero />
      <Bestsellers addToCart={addToCart} />
      <Men addToCart={addToCart} />
      <Women addToCart={addToCart} />
      <About />
      <Reviews />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;