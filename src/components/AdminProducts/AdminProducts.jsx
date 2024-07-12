import './AdminProducts.css';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import data from "../../fakeapi/data.json";
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Asegúrate de que coincide con el id de tu elemento raíz

const AdministrarProducts = () => {
    const { userData } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
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
        setProducts(data); // Establece los productos desde el archivo data.json
    }, []);

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

    const addProduct = () => {
        const productToAdd = {
            ...newProduct,
            id: products.length ? products[products.length - 1].id + 1 : 1,
        };
        setProducts([...products, productToAdd]);
        closeModal();
    };

    const deleteProduct = (productId) => {
        setProducts(products.filter(product => product.id !== productId));
    };

    const editProduct = () => {
        setProducts(products.map(product => 
            product.id === currentProduct.id ? newProduct : product
        ));
        closeEditModal();
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