import "./ProductsSection.css";
import ProductCard from "../ProductCard/ProductCard.jsx"
import data from "../../fakeapi/data.json";

function ProductsSection({ filtro }) {
    const producst = data.filter(
        ( product ) => product.title.toLocaleLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <div className="products-section">
            { producst.map((product) => (
                <ProductCard key={ product.id } product={ product } />
            ))}
        </div>
    );
}

export default ProductsSection;