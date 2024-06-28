import "./Header.css"
import HeaderNavBar from "../headerNavBar/HeaderNavBar";
import IconList from "../iconList/IconList"

function Header({ onFilterChange, cartItemCount}) {
   
    return (
        <header>
            <div className="header-container">
                <HeaderNavBar onFilterChange={ onFilterChange } />
                <IconList cartItemCount={cartItemCount} />
            </div>
        </header>
    );
}

export default Header;