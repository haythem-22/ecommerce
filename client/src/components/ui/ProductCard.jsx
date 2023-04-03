import React from 'react';

const ProductCard = ({ image, name, description, price, onAddToCart }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="price">${price}</span>
      <button 
        className="add-to-cart" 
        onClick={onAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;