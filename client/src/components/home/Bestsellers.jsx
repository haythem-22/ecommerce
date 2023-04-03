import React from 'react';
import ProductCard from '../ui/ProductCard';
import { useCart } from '../../context/CartContext';
const Bestsellers = () => {
  const {addToCart} = useCart()
  const products = [
    {
      id: 1,
      image: "https://i.pinimg.com/1200x/15/42/a9/1542a96e087f84b786552e37e0356a8a.jpg",
      name: "SI Georgio Armani",
      description: "A refined fragrance combining blackcurrant, florals, vanilla, and soft woody notes.",
      price: 174
    },
    {
      id: 2,
      image: "https://i.pinimg.com/1200x/f1/ba/d4/f1bad4c880b823939a6a6fbcfc1a38fb.jpg",
      name: "Prada Paradoxe",
      description: "A bright floral-amber scent with neroli, citrus, amber, and musk.",
      price: 180
    },
    {
      id: 3,
      image: "https://i.pinimg.com/736x/1d/19/7c/1d197c3d5957030ce74b05428af8d4d9.jpg",
      name: "The Most Wanted Azzaro",
      description: "A bold amber-woody spicy scent with ginger, sweet vanilla, and deep woods.",
      price: 150
    },
    {
      id: 4,
      image: "https://i.pinimg.com/736x/65/d1/22/65d1228db9c33d32e5b7ec412d513ece.jpg",
      name: "Jean Paul Gaultier Le Mâle Elixir",
      description: "An intense aromatic vanilla fragrance with spicy cardamom, creamy vanilla, and a smooth woody-amber base.",
      price: 130
    }
  ];

  return(
    <section className='section' id='shop'>
      <div className='section-title'>
        <span/>

        <h2>Best Sellers</h2>
        <span/>
      </div>
      <div className='products'>
        {products.map(product =>(
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
        )) }
      </div>

    </section>
  )
};

export default Bestsellers;