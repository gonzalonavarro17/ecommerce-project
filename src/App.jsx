import { useState } from 'react';
import Header from './components/header/Header.jsx'
import Banner from './components/banner/Banner.jsx';
import ProductDetails from './views/ProductDetails.jsx';
import ProductsSection from './components/ProductsSection/ProductsSection.jsx'
import CartSection from './components/CartSection/CartSection.jsx'
import LoginForm from './components/FormLogin/FormLogin.jsx';
import { Footer } from './components/footer/Footer';
import { useTheme } from "./hooks/useTheme.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound from './views/NotFound.jsx';
import ProtectedRoute from './views/ProtectedRoute.jsx';
import AdminProducts from "./components/AdminProducts/AdminProducts.jsx"

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
    <BrowserRouter>
          <div className={darkMode ? "dark-mode" : ""}>
            <Header   
              onFilterChange={setFiltro} 
              showCart={handleShowCart}
              showProducts={handleShowProducts}
            />
            <Banner />
            <Routes>
              <Route path="/" element={<ProductsSection filtro={filtro} />} />
              <Route path="/cart" element={
                <ProtectedRoute>
                  <CartSection />
                </ProtectedRoute>
              }/>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/admin/products" 
                element={ 
                <ProtectedRoute adminOnly>
                  <AdminProducts />
                </ProtectedRoute>
              }
            />
              <Route path='/products/:productId' element={
                <ProtectedRoute>
                  <ProductDetails />
                </ProtectedRoute>
              }/>
              <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
    </BrowserRouter>
  )
}

export default App
