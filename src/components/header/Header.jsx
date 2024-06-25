import "./Header.css"
import HeaderNavBar from "../headerNavBar/HeaderNavBar";
import IconList from "../iconList/IconList"

function Header({ onFilterChange }) {
    const handleInputChange = ( nuevoFiltro ) => {
        onFilterChange( nuevoFiltro );
    };

    return (
        <header>
            <div className="header-container">
                <HeaderNavBar onFilterChange={ handleInputChange } />
                <IconList />
            </div>
        </header>
    );
}

export default Header;