import "./Header.css"
import { useContext, useState } from 'react';
import HeaderNavBar from "../headerNavBar/HeaderNavBar";
import IconList from "../iconList/IconList"
import CestaProductos from "../../pages/CestaProductos";
import { ThemeContext } from "../Content/ThemeContext";

function Header({ onFilterChange, cartItemCount}) {
    const [ verCestaProductos, setVerCestaProductos ] = useState(false);
    const { theme, toggleTheme } = useContext( ThemeContext );

    const handleToggleCartSummary = () => {
        setVerCestaProductos(!verCestaProductos);
    };

    const handleCloseCartSummary = () => {
        setVerCestaProductos(false);
    };

    return (
        <header>
            <div className="header-container">
                <HeaderNavBar onFilterChange={ onFilterChange } />
                <IconList cartItemCount={cartItemCount} onCartIconClick={handleToggleCartSummary} />
                <button onClick={toggleTheme} className="theme-toggle">
                    {theme === "Light" ? "🌙" : "☀️"}
                </button>
            </div>
            {verCestaProductos && <CestaProductos cesta={[]} onClose={handleCloseCartSummary} />}
        </header>
    );
}

export default Header;