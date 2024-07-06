import { useParams } from "react-router-dom";

const ProductDetails = () => {

    const { productId } = useParams();

    return (
        <div>
            <h2>Detalles del producto con ID - {productId}</h2>
        </div>
    );
};

export default ProductDetails;