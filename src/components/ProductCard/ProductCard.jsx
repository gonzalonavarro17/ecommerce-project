import PropTypes from 'prop-types';
import './ProductCard.css'
import { useCart } from "../../hooks/useCart.js"

const ProductCard = ({ product }) => {
    const { id, title, price, description, image, rating } = product;
    const { addToCart } = useCart();

    return (
        <div className='product-card' key={ id }>
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
                <button className="button-add" onClick={() => addToCart(product)}>Agregar al carrito</button>
            </div>
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