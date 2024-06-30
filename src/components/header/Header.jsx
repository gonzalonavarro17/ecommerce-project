import "./Header.css";
import { useContext, useState } from 'react';
import HeaderNavBar from "../headerNavBar/HeaderNavBar";
import IconList from "../iconList/IconList";
import { ThemeContext } from "../../context/ThemeContext";

function Header({ onFilterChange, cartItemCount, mostrarCesta, mostrarProductos}) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header>
            <div className="header-container">
                <HeaderNavBar onFilterChange={onFilterChange} onClickLogo={mostrarProductos} />
                <IconList cartItemCount={cartItemCount} onCartIconClick={mostrarCesta} />
                <button onClick={toggleTheme} className="theme-toggle">
                    {theme === "Light" ? "🌙" : "☀️"}
                </button>
            </div>
        </header>
    );
}

export default Header;