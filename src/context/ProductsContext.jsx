import { createContext, useState, useEffect } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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

    const addProduct = async (newProduct) => {
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

    const editProduct = async (updatedProduct) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`http://localhost:3000/products/${updatedProduct.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedProduct),
            });
            if (!response.ok) throw new Error('Error editing product');
            const updatedData = await response.json();
            setProducts(products.map(product => 
                product.id === updatedProduct.id ? updatedData : product
            ));
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ProductsContext.Provider value={{ products, loading, setLoading, error, setError, addProduct, deleteProduct, editProduct }}>
            {children}
        </ProductsContext.Provider>
    );
};