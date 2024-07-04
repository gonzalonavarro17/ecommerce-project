import { useState } from "react"

function HeaderNavBar({ onFilterChange, onClickLogo }) {
    const menuOptions = ["Inicio", "Categorias", "Ofertas", "Contacto"];
    const [ textoFiltro, setTextoFiltro ] = useState("") 

    const handleInputChange = (e) => {
        const nuevoTexto = e.target.value;
        setTextoFiltro(nuevoTexto);
        onFilterChange(nuevoTexto);
     };

     return (
        <>
            <div onClick={onClickLogo} className="logo">
                MiTienda
            </div>
            <ul className="menu-options">
                {menuOptions.map((option) => (
                <li className="options-menu" key={option}>{option}</li>
                ))}
            </ul>
            <div className="search-bar">
            <input value={textoFiltro} 
                onChange={handleInputChange}
                type="text" 
                className="Header-search" 
                placeholder="Buscar productos..." 
            />
            </div>
        </>
     )
}

export default HeaderNavBar;