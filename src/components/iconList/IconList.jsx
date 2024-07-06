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
            <div className="icon-container">
                <Link to="/cart" className="header-icon-link">
                    <i className="fas fa-shopping-cart" onClick={onClickCartIcon} ></i>
                        {cartItemCount > 0 && (
                            <span className="icon-badge">{cartItemCount}</span>
                        )}
                </Link>
            </div>
            <i className="fas fa-heart" />
            <i className="fas fa-user" />
            <i className="fas fa-adjust" onClick={() => toggleTheme()} />
        </div>
    )
}

IconList.propTypes = {
    onClickCartIcon: PropTypes.func.isRequired, 
};

export default IconList;