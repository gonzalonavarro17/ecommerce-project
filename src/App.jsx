import './App.css';
import Header from './components/menu/Menu.jsx'
import { Footer } from './components/footer/Footer';
import { useState } from 'react';
import PorductsSection from './components/productsSection/productsSection.jsx';

function App() {
  const [ filtro, setFiltro ] = useState("");

  return (
    <>
      <Header   onFilterChange={setFiltro} />
      <Banner />
      <PorductsSection filtro={filtro} />
      <Footer />
    </>
  )
}

export default App
