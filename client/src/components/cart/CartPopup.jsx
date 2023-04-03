import React from 'react';
import { useCart } from '../../context/CartContext';
import './CartPopup.css';

const CartPopup = () => {
  const { 
    cartItems, 
    cartTotal, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity 
  } = useCart();
  console.log("cart popup is open: " , isCartOpen)

  if (!isCartOpen) return null;

  return (
    <div className="cart-popup-overlay" onClick={closeCart}>
      <div className="cart-popup" onClick={(e) => e.stopPropagation()}>
        <div className="cart-popup-header">
          <h3>Your Cart ({cartItems.length} items)</h3>
          <button className="close-btn" onClick={closeCart}>×</button>
        </div>

        <div className="cart-popup-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty</p>
              <button className="btn-primary" onClick={closeCart}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map(item => (
                  <div className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <p className="cart-item-price">${item.price}</p>
                      
                      <div className="cart-item-actions">
                        <div className="quantity-controls">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="quantity-btn"
                          >
                            -
                          </button>
                          <span className="quantity">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="quantity-btn"
                          >
                            +
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="remove-btn"
                          title="Remove item"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                    
                    <div className="cart-item-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-popup-footer">
                <div className="cart-total">
                  <span>Total:</span>
                  <span className="total-amount">${cartTotal.toFixed(2)}</span>
                </div>
                
                <div className="cart-buttons">
                  <button className="btn-secondary" onClick={closeCart}>
                    Continue Shopping
                  </button>
                  <button className="btn-primary" onClick={() => alert('under development')}>
                    Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPopup;