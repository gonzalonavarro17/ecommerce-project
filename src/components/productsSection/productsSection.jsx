import "./ProductsSection.css";
import ProductCard from "../ProductCard/ProductCard.jsx"
import data from "../../fakeapi/data.json";

function ProductsSection({ filtro, addToCart }) {
    const products = data.filter(
        ( product ) => product.title.toLocaleLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <div className="products-section">
            { products.map((product) => (
                    <ProductCard key={ product.id } product={ product } addToCart={ addToCart } />
            ))}
        </div>
    );
}


export default ProductsSection;