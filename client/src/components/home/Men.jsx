import React from 'react';
import { useCart } from '../../context/CartContext';
const Men = () => {
    const { addToCart} = useCart()
  const products = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/79/f7/db/79f7dbc6dd1106b9a5de4ccb93a0fff7.jpg",
      name: "Stronger With You by Giorgio Armani",
      description: "A warm gourmand spicy-woody scent with cinnamon, cardamom, vanilla, and chestnut.",
      price: 120
    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/56/ad/2e/56ad2e4627ee090375dfacc06b20d724.jpg",
      name: "Jean Paul Gaultier Le Mâle",
      description: "A classic fresh-oriental scent with mint, lavender, vanilla, cinnamon, and tonka bean.",
      price: 110
    },
    {
      id: 3,
      image: "https://i.pinimg.com/1200x/9a/bd/d3/9abdd31ce3afedbe2d525808573c0e56.jpg",
      name: "YSL Libre Elixir",
      description: "A rich amber-vanilla floral with orange blossom, rose, vanilla, and tonka bean.",
      price: 175
    },
    {
      id: 4,
      image: "https://i.pinimg.com/1200x/c4/5e/07/c45e0766f0fe62fdcf9fa8cc2cce1d40.jpg",
      name: "Bleu de Chanel",
      description: "A refined woody-aromatic scent with citrus, mint, ginger, jasmine, and warm woods.",
      price: 140
    }
  ];

  return (
    <section className="section light" id="men">
      <div className="section-title">
        <span />
        <h2>For Men</h2>
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

export default Men;