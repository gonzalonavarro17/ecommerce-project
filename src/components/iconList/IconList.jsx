import { useCart } from "../../hooks/useCart";
import { useTheme } from "../../hooks/useTheme"
import PropTypes from "prop-types";

function IconList({ onClickCartIcon }) {
    const whiteIconStyle = { filter: "invert(100%" };
    const { cartItems } = useCart();
    const { toggleTheme } = useTheme();

    const cartItemCount = cartItems.length;

    return (
        <div className="Header-icons">
            <div className="icon-container">
                <i className="fas fa-shopping-cart" onClick={onClickCartIcon} style={whiteIconStyle} ></i>
                    {cartItemCount > 0 && (
                        <span className="icon-badge">{cartItemCount}</span>
                    )}
            </div>
            <i className="fas fa-heart" style={whiteIconStyle} />
            <i className="fas fa-user" style={whiteIconStyle} />
            <i className="fas fa-adjust" onClick={() => toggleTheme()} style={whiteIconStyle}/>
        </div>
    )
}

IconList.propTypes = {
    onClickCartIcon: PropTypes.func.isRequired, 
};

export default IconList;