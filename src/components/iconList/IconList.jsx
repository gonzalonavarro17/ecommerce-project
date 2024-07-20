import { useCart } from "../../hooks/useCart.jsx";
import { useTheme } from "../../hooks/useTheme.jsx"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function IconList({ onClickCartIcon }) {
    //const whiteIconStyle = { filter: "invert(100%" };
    const { cartItems } = useCart();
    const { toggleTheme } = useTheme();

    const cartItemCount = cartItems.length;

    return (
        <div className="Header-icons">
            <Link to="/cart" className="header-icon-link">
                <i className="fas fa-shopping-cart" onClick={onClickCartIcon} ></i>
                    {cartItemCount > 0 && (
                    <span className="icon-badge">{cartItemCount}</span>
                    )}
            </Link>
            <i className="fas fa-heart" />
            <Link to="/login" className="header-icon-link" >
            <i className="fas fa-user" />
            </Link>
            <i className="fas fa-adjust" onClick={() => toggleTheme()} />
        </div>
    )
}

IconList.propTypes = {
    onClickCartIcon: PropTypes.func.isRequired, 
};

export default IconList;