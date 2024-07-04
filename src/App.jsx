import { useState } from 'react';
import Header from './components/header/Header.jsx'
import Banner from './components/banner/Banner.jsx';
import ProductsSection from './components/productsSection/ProductsSection.jsx';
import CartSection from './components/CartSection/CartSection.jsx'
import LoginForm from './components/FormLogin/FormLogin.jsx';
import { Footer } from './components/footer/Footer';
import { useTheme } from "./hooks/useTheme.js"

function App() {
  const [ filtro, setFiltro ] = useState("");
  const { darkMode } = useTheme();
  const [ showCartSection, setShowCartSection ] = useState(false);

  const handleShowCart = () => {
    setShowCartSection(true);
  };

  const handleShowProducts = () => {
    setShowCartSection(false);
  };

  return (
      <div className={darkMode ? "dark-mode" : ""}>
          <Header   
            onFilterChange={setFiltro} 
            showCart={handleShowCart}
            showProducts={handleShowProducts}
          />
          <Banner />
            { showCartSection ? <CartSection /> : <ProductsSection filtro={filtro} /> }
          <LoginForm />
          <Footer />
      </div>
  )
}

export default App
