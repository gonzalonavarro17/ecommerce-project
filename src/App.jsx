import './App.css';
import Header from './components/header/Header.jsx'
import Banner from './components/banner/Banner.jsx';
import { Footer } from './components/footer/Footer';
import { useState, useEffect } from 'react';
import ProductsSection from './components/productsSection/ProductsSection.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import CestaProductos from './components/CestaProductos/CestaProductos.jsx';
import Form from './components/FormLogin/FormLogin.jsx';

function App() {
  const [ filtro, setFiltro ] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleLogin = (user) => {
    setUser(user);
    setIsLoggedIn(true);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('user');
  };

  const handleCartIconClick = () => {
    setShowCart(true);
  };

  const handleBackToProductsClick = () => {
    setShowCart(false);
  };

  return (
      <>
        <ThemeProvider>
          <Header   
            onFilterChange={setFiltro} 
            cartItemCount={cartItems.length} 
            mostrarCesta={handleCartIconClick}
            mostrarProductos={handleBackToProductsClick}
          />
          <Banner isLoggedIn={isLoggedIn} user={user} />
            { showCart ? <CestaProductos /> : <ProductsSection filtro={filtro} addToCart={addToCart} /> }
          <ProductsSection filtro={filtro} addToCart={addToCart}/>
          <Form onLogin={handleLogin} onLogout={handleLogout} isLoggedIn={isLoggedIn}/>
          <Footer />
        </ThemeProvider>
      </>
  )
}

export default App
