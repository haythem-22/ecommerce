import React from 'react';
import { useCart } from '../../context/CartContext';
const Women = () => {
    const { addToCart } = useCart()
  const products = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/7b/f5/40/7bf540faf2929b90d1822de362b10980.jpg",
      name: "Libre Ysl",
      description: "A bold modern floral with lavender, orange blossom, and vanilla-musk warmth.",
      price: 155
    },
    {
      id: 2,
      image: "https://i.pinimg.com/1200x/1b/2c/62/1b2c6227de06090219c1612df39c636b.jpg",
      name: "Burberry Her London dream",
      description: "A bright, playful fruity-floral scent with red berries, citrus, and creamy musk.",
      price: 95
    },
    {
      id: 3,
      image: "https://i.pinimg.com/736x/bf/e7/a4/bfe7a4be0fcb61020a245ab67ab900b2.jpg",
      name: "My Way by Giorgio Armani",
      description: "A fresh luminous floral with citrus, white florals, and creamy musk-sandalwood.",
      price: 135
    },
    {
      id: 4,
      image: "https://i.pinimg.com/1200x/8b/6d/4c/8b6d4c2c64fb73bcc3214e836d480ed9.jpg",
      name: "Givenchy Irresistible",
      description: "A bright floral-fruity scent with pear, raspberry, rose, and creamy musk.",
      price: 120
    }
  ];

  return (
    <section className="section" id="women">
      <div className="section-title">
        <span />
        <h2>For Women</h2>
        <span />
      </div>
      <div className="products">
        {products.map(product => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span className="price">${product.price}</span>
            <button 
              className="add-to-cart" 
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Women;