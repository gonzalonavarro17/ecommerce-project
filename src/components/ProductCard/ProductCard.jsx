import PropTypes from 'prop-types';
import { useContext } from 'react';
import './ProductCard.css'
import { useCart } from "../../hooks/useCart.jsx"
import { ThemeContext } from "../../context/ThemeContext.jsx"
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth.jsx"

const ProductCard = ({ product }) => {
    const { id, title, price, description, image, rating } = product;
    const { addToCart } = useCart();
    const { darkMode } = useContext(ThemeContext);
    const { isLoggedIn } = useAuth();

    return (
        <div className='product-card' key={ id }>
            <Link to={`/products/${id}`} className='product-card-link'>
                <img className='product-image' src={ image } alt={ title } />
                <div className='product-info'>
                    <h3 className='product-title'>{ title }</h3>
                    <p className='product-description'>{ description }</p>
                    { false && (
                        <div className='product-rating'>
                            <p>{`Rating: ${ rating.rate } (${ rating.count } reviews)`}</p>
                        </div>
                    )}
                    <p className='product-price'>{`$${price}`}</p>
                </div>
            </Link>
            {isLoggedIn && (
                <button className={`button-add ${darkMode ? 'dark' : 'light'}`} 
                        onClick={() => addToCart(product)}>
                            Agregar al carrito
                </button>
            )}
        </div>
    );
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        rating: PropTypes.shape({
            rate: PropTypes.number,
            count: PropTypes.number
        }).isRequired
    }).isRequired
};

export default ProductCard;