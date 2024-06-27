import "./Header.css"
import HeaderNavBar from "../headerNavBar/HeaderNavBar";
import IconList from "../iconList/IconList"

function Header({ onFilterChange }) {
   
    return (
        <header>
            <div className="header-container">
                <HeaderNavBar onFilterChange={ onFilterChange } />
                <IconList />
            </div>
        </header>
    );
}

export default Header;