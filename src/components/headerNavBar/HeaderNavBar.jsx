import { useState } from "react"

function HeaderNavBar({ onFilterChange }) {
    const menuOptions = ["Inicio", "Categorias", "Ofertas", "Contacto"];
    const [ textoFiltro, setTextoFiltro ] = useState("") 

    const handleInputChange = (e) => {
        const nuevoTexto = e.target.value;
        setTextoFiltro(nuevoTexto);
        onfilterChange(nuevoTexto);
     };

     return (
        <>
            <div className="logo">MiTIneda</div>
            <ul>
                {menuOptions.map((option) => (
                <li key={option}>{option}</li>
                ))}
            </ul>
            <div className="search-bar">
            <input value={textoFiltro} 
                onChange={handleInputChange}
                type="text" 
                className="Header-search" 
                placeholder="Buscar productos" 
            />
            </div>
        </>
     )
}

export default HeaderNavBar;