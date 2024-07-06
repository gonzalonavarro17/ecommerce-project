import { useParams } from "react-router-dom";
import './ProductDetails.css'
import { Link } from "react-router-dom";
import data from "../fakeapi/data.json";
import { useCart } from "../hooks/useCart";
import useAuth from "../hooks/useAuth";

const ProductDetails = () => {

    const { productId } = useParams();
    const { addToCart } = useCart();
    const { isLoggedIn } = useAuth();

    const product = data.find(product => product.id === parseInt(productId));

    const handleAddToCart = () => {
        addToCart(product);
        console.log(`Producto ${productId} añadido a la cesta`);
    };

    return (
        <div className="product-details">
            <img src={product.image} alt={product.title} className="product-details-image" />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p className="product-details-price">{`$${product.price}`}</p>
            <div className="product-details-rating">
                <p>{`Rating: ${product.rating.rate} (${product.rating.count} reviews)`}</p>
            </div>
            {isLoggedIn && (
                <button onClick={handleAddToCart}>Añadir a la cesta</button>
            )}
            <Link to="/" className="back-button">Volver a la página principal</Link>
        </div>
    );
};

export default ProductDetails;