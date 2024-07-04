import "./Header.css";
import HeaderNavBar from "../headerNavBar/HeaderNavBar";
import IconList from "../iconList/IconList";
import PropTypes from "prop-types";

function Header({ onFilterChange, showCart, showProducts }) {
    const handleFilterChange = (nuevoFiltro) => {
        onFilterChange(nuevoFiltro);
    };

    return (
        <header>
            <div className="header-container">
                <HeaderNavBar 
                    onFilterChange={handleFilterChange} 
                    onClickLogo={showProducts} 
                />
                <IconList onCartIconClick={showCart} />
            </div>
        </header>
    );
}

/* <button onClick={toggleTheme} className="theme-toggle">
                    {theme === "Light" ? "🌙" : "☀️"}
                </button>
*/

Header.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    showCart: PropTypes.func.isRequired,
    showProducts: PropTypes.func.isRequired,
};


export default Header;