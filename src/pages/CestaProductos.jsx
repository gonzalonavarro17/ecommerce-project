import './CestaProductos.css'

const CestaProductos = ({ cesta, onClose }) => {
    const calculateTotal = () => {
        return cesta.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div className="cart-summary">
            <h2>Resumen de la Cesta</h2>
            <button onClick={onClose}>Cerrar</button>
            <ul>
                {cesta.map(item => (
                    <li key={item.id}>
                        <p>{item.title}</p>
                        <p>Precio: ${item.price}</p>
                    </li>
                ))}
            </ul>
            <h3>Total: ${calculateTotal()}</h3>
        </div>
    );
};

export default CestaProductos;