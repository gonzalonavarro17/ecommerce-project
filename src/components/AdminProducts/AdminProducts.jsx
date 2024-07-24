import './AdminProducts.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, addProduct, deleteProduct, editProduct } from '../../redux/slices/productsSlice'
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const AdminProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);
    const { register, handleSubmit, formState: { errors } , setValue, reset } = useForm();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    const openModal = () => {
        reset();
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const openEditModal = (product) => {
        setCurrentProduct(product);
        reset(product);
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
                setValue('image', reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const onSubmitAdd = async (data) => {
        await dispatch(addProduct(data));
        closeModal();
        alert("Producto añadido correctamente.");
    };

    const onSubmitEdit = async (data) => {
        await dispatch(editProduct({ ...currentProduct, ...data }));
        closeEditModal();
        alert("Producto editado correctamente.");
    };

    const handleDeleteProduct = async (productId) => {
        try {
            await dispatch(deleteProduct(productId));
            alert("Producto eliminado correctamente.");
        } catch (err) {
            alert("Error al eliminar el producto: " + err.message);
        }
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
                <form className="form-admin" onSubmit={handleSubmit(onSubmitAdd)}>
                    <input
                        type="text"
                        placeholder="Título"
                        {...register('title', { required: true, minLength: 3, maxLength: 30 })}
                    />
                    {errors.title && <p className='p-errors'>El título es obligatorio y debe tener entre 3 y 30 caracteres.</p>}

                    <input
                        type="text"
                        placeholder="Descripción"
                        {...register('description', { required: true, minLength: 10, maxLength: 200 })}
                    />
                    {errors.description && <p className='p-errors'>La descripción es obligatoria y debe tener entre 10 y 200 caracteres.</p>}

                    <input
                        type="number"
                        placeholder="Precio"
                        {...register('price', { required: true, min: 0.01 })}
                    />
                    {errors.price && <p className='p-errors'>El precio es obligatorio y debe ser mayor que 0.</p>}

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    <button type="submit">Añadir Producto</button>
                    <button type="button" onClick={closeModal}>Cancelar</button>
                </form>
            </Modal>
            <Modal
                isOpen={editModalIsOpen}
                onRequestClose={closeEditModal}
                contentLabel="Editar Producto"
            >
                <h2>Editar Producto</h2>
                <form onSubmit={handleSubmit(onSubmitEdit)}>
                    <input
                        type="text"
                        placeholder="Título"
                        {...register('title', { required: true, minLength: 3, maxLength: 30 })}
                    />
                    {errors.title && <p className='p-errors'>El título es obligatorio y debe tener entre 3 y 30 caracteres.</p>}

                    <input
                        type="text"
                        placeholder="Descripción"
                        {...register('description', { required: true, minLength: 10, maxLength: 200 })}
                    />
                    {errors.description && <p className='p-errors'>La descripción es obligatoria y debe tener entre 10 y 200 caracteres.</p>}

                    <input
                        type="number"
                        placeholder="Precio"
                        {...register('price', { required: true, min: 0.01 })}
                    />
                    {errors.price && <p className='p-errors'>El precio es obligatorio y debe ser mayor que 0.</p>}

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    <button type="submit">Guardar Cambios</button>
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