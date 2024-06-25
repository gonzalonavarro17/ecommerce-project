import { useState } from 'react'
import './Menu.css'

function Header({ onfilterChange }) {
    const menuOptions = ["Inicio", "Categorias", "Ofertas", "Contacto"];
    const [ textoFiltro, setTextoFiltro ] = useState("") 

    const handleInputChange = (e) => {
        const nuevoTexto = e.target.value;
        setTextoFiltro(nuevoTexto);
        onfilterChange(nuevoTexto);
     };

     return (
        <>
        <header className='Header'>
            <div className='Header-wrapper'>
                <Logo />
                <ul>
                    {menuOptions.map((opt) => (
                        <li key={opt}>{opt}</li>
                    ))}
                </ul>
                <input value={textoFiltro} 
                    onChange={handleInputChange}
                    type="text" 
                    className="Header-search" 
                    placeholder="Buscar productos" 
            />
                <Iconos />
            </div>
        </header>
        </>
    )
}



const Logo = () => {
    return (
        <h1 className='Header-h1'>MiTienda</h1>
    )
}

const Iconos = () => {
    return (
        <div className="Header-icons">
            <i className="fas fa-shopping-cart"></i>
            <i className="fas fa-heart"></i>
            <i className="fas fa-user"></i>
        </div>
    )
}

export default Header;