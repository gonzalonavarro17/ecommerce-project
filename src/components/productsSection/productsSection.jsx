import "./ProductsSection.css";
import ProductCard from "../ProductCard/ProductCard.jsx"
import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';

function ProductsSection({ filtro, addToCart }) {
    const { products, loading, error } = useContext(ProductsContext);

    const filteredProducts = products.filter(
        (product) => product.title.toLowerCase().includes(filtro.toLowerCase())
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="products-section">
            {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
}

export default ProductsSection;