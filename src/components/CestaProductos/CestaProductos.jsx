const CestaProductos = ({ cesta, onClose }) => {

    const calculateTotal = () => {
        return cesta.reduce((total, item) => total + item.price, 0);
    };

    if (!cesta || cesta.length === 0) {
        return (
            <div className="cart-summary">
                <h2>Resumen de la Cesta</h2>
                <p>No hay productos en la cesta</p>
                <button onClick={onClose}>Cerrar</button>
                <ul>
                {cesta.map(item => (
                    <li key={item.id}>
                        <p>{item.title}</p>
                        <img className='product-image' src={ item.image } alt={ item.title } />
                        <p>Precio: ${item.price}</p>
                    </li>
                ))}
            </ul>
            <h3>Total: ${calculateTotal()}</h3>
            </div>
        );
    }

};

export default CestaProductos;