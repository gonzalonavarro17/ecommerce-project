import "./Header.css"
import { useState } from 'react';
import HeaderNavBar from "../headerNavBar/HeaderNavBar";
import IconList from "../iconList/IconList"
import CestaProductos from "../../pages/CestaProductos";

function Header({ onFilterChange, cartItemCount}) {
    const [ verCestaProductos, setVerCestaProductos ] = useState(false);

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
            </div>
            {verCestaProductos && <CestaProductos cesta={[]} onClose={handleCloseCartSummary} />}
        </header>
    );
}

export default Header;