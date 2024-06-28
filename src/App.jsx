import './App.css';
import Header from './components/header/Header.jsx'
import Banner from './components/banner/Banner.jsx';
import { Footer } from './components/footer/Footer';
import { useState } from 'react';
import ProductsSection from './components/productsSection/ProductsSection.jsx';
import CestaProductos from './pages/CestaProductos.jsx';

function App() {
  const [ filtro, setFiltro ] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
      <>
        <Header   onFilterChange={setFiltro} cartItemCount={cartItems.length} />
        <Banner />
        <ProductsSection filtro={filtro} addToCart={addToCart}/>
        <Footer />
      </>
  )
}

export default App
