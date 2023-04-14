import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/AuthContext';
import CartPopup from './components/cart/CartPopup';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import SignupPage from './pages/Signup/SignupPage';
import './App.css';


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

function AppContent() {
  const { isAuthenticated } = useAuth();
  
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={
          isAuthenticated ? <Navigate to="/" /> : <LoginPage />
        } />
        <Route path="/signup" element={
          isAuthenticated ? <Navigate to="/" /> : <SignupPage />
        } />
        <Route path="/" element={
          <ProtectedRoute>
            <>
              <HomePage />
              <CartPopup />
            </>
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;