import logo from './logo.svg';
import './App.css';
import { CartProvider } from './context/CartContext';
import CartPopup from './components/cart/CartPopup';
import HomePage from './pages/Home/HomePage';
function App() {
  return (
    <CartProvider>
    <div className="App">
     <HomePage/>
     <CartPopup/>
    </div>
    </CartProvider>
  );
}

export default App;
