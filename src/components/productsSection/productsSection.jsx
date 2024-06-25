import "./PrductSection.css";
import ProductCard from "../ProductCard/ProductCard.jsx"
import data from "../../fakeapi/data.json";

function PorductsSection({ filtro }) {
    const producst = data.filter(
        ( product ) => product.title.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
    );

    return (
        <div className="products-section">
            { producst.map((product) => (
                <ProductCard key={ product.id } product={ product } />
            ))}
        </div>
    );
}

export default PorductsSection;