import { useCart } from '../../hooks/useCart.jsx';
import './CartSection.css';

const CartSection = () => {
    const { cartItems } = useCart();

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    return (
        <div className="cart-section">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} className="cart-item-image" />
                                <div className="cart-item-info">
                                    <h3>{item.title}</h3>
                                    <p>{`$${item.price}`}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-total">
                        <h3>Total: ${getTotalPrice()}</h3>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartSection;