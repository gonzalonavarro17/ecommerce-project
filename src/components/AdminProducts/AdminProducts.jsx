import './AdminProducts.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, addProduct, deleteProduct, editProduct } from '../../redux/slices/productsSlice'
import Modal from 'react-modal';

Modal.setAppElement('#root');

const AdminProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);
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
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

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

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewProduct({ ...newProduct, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddProduct = async () => {
        await dispatch(addProduct(newProduct));
        closeModal();
        alert("Producto añadido correctamente.");
    };

    const handleDeleteProduct = async (productId) => {
        await dispatch(deleteProduct(productId));
        alert("Producto eliminado correctamente.");
    };

    const handleEditProduct = async () => {
        await dispatch(editProduct({ ...currentProduct, ...newProduct }));
        closeEditModal();
        alert("Producto editado correctamente.");
    };

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
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
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    <button type="button" onClick={handleAddProduct}>Añadir Producto</button>
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
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    <button type="button" onClick={handleEditProduct}>Guardar Cambios</button>
                    <button type="button" onClick={closeEditModal}>Cancelar</button>
                </form>
            </Modal>
            <div className="admin-products-section">
                {products.map((product) => (
                    <div key={product.id} className="admin-product">
                        <img className='admin-product-image' src={product.image} alt={product.title} />
                        <div className='admin-product-info'>
                            <h3 className='admin-product-title'>{product.title}</h3>
                            <p className='admin-product-description'>{product.description}</p>
                            <p className='admin-product-price'>${product.price}</p>
                        </div>
                        <div className="icon-container">
                            <i onClick={() => handleDeleteProduct(product.id)} className="fas fa-trash delete-icon"></i>
                            <i onClick={() => openEditModal(product)} className="fas fa-edit edit-icon"></i>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AdminProducts;