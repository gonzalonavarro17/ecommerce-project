import "./Header.css";
import { useContext, useState } from 'react';
import HeaderNavBar from "../headerNavBar/HeaderNavBar";
import IconList from "../iconList/IconList";
import { ThemeContext } from "../Content/ThemeContext";
import CestaProductos from "../CestaProductos/CestaProductos";

function Header({ onFilterChange, cartItemCount }) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [mostrarCesta, setMostrarCesta] = useState(false);

    const handleMostrarCesta = () => {
        setMostrarCesta(true);
    };

    const handleCloseCesta = () => {
        setMostrarCesta(false);
    };

    return (
        <header>
            <div className="header-container">
                <HeaderNavBar onFilterChange={onFilterChange} />
                <IconList cartItemCount={cartItemCount} onCartIconClick={handleMostrarCesta} />
                <button onClick={toggleTheme} className="theme-toggle">
                    {theme === "Light" ? "🌙" : "☀️"}
                </button>
            </div>
            {mostrarCesta && <CestaProductos onClose={handleCloseCesta} />}
        </header>
    );
}

export default Header;