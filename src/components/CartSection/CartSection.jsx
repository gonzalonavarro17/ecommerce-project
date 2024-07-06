import { useCart } from '../../hooks/useCart.jsx';
import './CartSection.css';

const CartSection = () => {
    const { cartItems, clearCart } = useCart();

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    const handleFinishPurchase = () => {
        alert('Se procederá a la pasarela de pago...');
        clearCart(); // Llama a clearCart para eliminar todos los productos del carrito
    };

    return (
        <div className="cart-section">
            <h2>Resumen de compra</h2>
            {cartItems.length === 0 ? (
                <p>Tu carro esta vacío.</p>
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
                    <div className="cart-buttons">
                        <button onClick={handleFinishPurchase}>Finalizar compra</button>
                        <button onClick={clearCart}>Eliminar todos los productos</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartSection;