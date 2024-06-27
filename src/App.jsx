import './App.css';
import Header from './components/header/Header.jsx'
import Banner from './components/banner/Banner.jsx';
import { Footer } from './components/footer/Footer';
import { useState } from 'react';
import ProductsSection from './components/productsSection/ProductsSection.jsx';

function App() {
  const [ filtro, setFiltro ] = useState("");

  return (
    <>
      <Header   onFilterChange={setFiltro} />
      <Banner />
      <ProductsSection filtro={filtro} />
      <Footer />
    </>
  )
}

export default App
