import './AdminProducts.css'
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import data from "../../fakeapi/data.json"

const AdministrarProducts = () => {
    const { userData } = useContext(AuthContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(data); // Establece los productos desde el archivo data.json
      }, []);

    // Funciones para añadir, eliminar, y modificar productos

    const addProduct = () => {
        // Implementación para añadir un nuevo producto
    };

    const deleteProduct = (productId) => {
        // Implementación para eliminar un producto
    };

    const editProduct = (productId, updatedProduct) => {
        // Implementación para editar un producto existente
    };

    // Verificar si el usuario es administrador para mostrar las funcionalidades
    if (userData.role !== 'admin') {
        return <p>No tienes permisos para gestionar productos.</p>;
    }

    return (
        <>
        <h2>Gestión de productos</h2>
        <button onClick={addProduct} className="add-product-btn">(+) Añadir Producto</button>
            <div className="admin-products-section">
                {/* Botón para añadir producto */}
                {/* Lista de productos */}
                {products.map((product) => (
                    <div key={product.id} className="admin-product">
                        <img className='admin-product-image' src={ product.image } alt={ product.title } />
                        <div className='admin-product-info'>
                            <h3 className='admin-product-title'>{ product.title }</h3>
                            <p className='admin-product-description'>{ product.description }</p>
                            <p className='admin-product-price'>${ product.price }</p>
                        </div>
                        {/* Botones para eliminar y editar */}
                        <div className="icon-container">
                        <i onClick={() => deleteProduct(product.id)} className="fas fa-trash delete-icon"></i>
                        <i onClick={() => editProduct(product.id)} className="fas fa-edit edit-icon"></i>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AdministrarProducts;