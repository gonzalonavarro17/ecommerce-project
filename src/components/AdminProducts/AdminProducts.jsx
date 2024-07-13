import './AdminProducts.css';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import data from "../../fakeapi/data.json";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const AdministrarProducts = () => {
    const { userData } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);
    const [newProduct, setNewProduct] = useState({
        title: '',
        description: '',
        price: '',
        image: ''
    });
    const [currentProduct, setCurrentProduct] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:3000/products');
            if (!response.ok) throw new Error('Error fetching products');
            const data = await response.json();
            setProducts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const openModal = () => {
        setNewProduct({ title: '', description: '', price: '', image: '' });
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const openEditModal = (product) => {
        setCurrentProduct(product);
        setNewProduct(product);
        setEditModalIsOpen(true);
    };

    const closeEditModal = () => {
        setEditModalIsOpen(false);
    };

    const addProduct = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:3000/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...newProduct,
                    id: products.length ? products[products.length - 1].id + 1 : 1,
                }),
            });
            if (!response.ok) throw new Error('Error adding product');
            const product = await response.json();
            setProducts([...products, product]);
            closeModal();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const deleteProduct = async (productId) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`http://localhost:3000/products/${productId}`, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error('Error deleting product');
            setProducts(products.filter(product => product.id !== productId));
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const editProduct = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`http://localhost:3000/products/${currentProduct.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct),
            });
            if (!response.ok) throw new Error('Error editing product');
            const updatedProduct = await response.json();
            setProducts(products.map(product => 
                product.id === currentProduct.id ? updatedProduct : product
            ));
            closeEditModal();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (userData.role !== 'admin') {
        return <p>No tienes permisos para gestionar productos.</p>;
    }

    return (
        <>
            <h2>Gestión de productos</h2>
            <button onClick={openModal} className="add-product-btn">(+) Añadir Producto</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Añadir Producto"
            >
                <h2>Añadir Producto</h2>
                <form>
                    <input
                        type="text"
                        placeholder="Título"
                        value={newProduct.title}
                        onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Descripción"
                        value={newProduct.description}
                        onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                    />
                    <input
                        type="number"
                        placeholder="Precio"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="URL de la imagen"
                        value={newProduct.image}
                        onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                    />
                    <button type="button" onClick={addProduct}>Añadir Producto</button>
                    <button type="button" onClick={closeModal}>Cancelar</button>
                </form>
            </Modal>
            <Modal
                isOpen={editModalIsOpen}
                onRequestClose={closeEditModal}
                contentLabel="Editar Producto"
            >
                <h2>Editar Producto</h2>
                <form>
                    <input
                        type="text"
                        placeholder="Título"
                        value={newProduct.title}
                        onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Descripción"
                        value={newProduct.description}
                        onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                    />
                    <input
                        type="number"
                        placeholder="Precio"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="URL de la imagen"
                        value={newProduct.image}
                        onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                    />
                    <button type="button" onClick={editProduct}>Guardar Cambios</button>
                    <button type="button" onClick={closeEditModal}>Cancelar</button>
                </form>
            </Modal>
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