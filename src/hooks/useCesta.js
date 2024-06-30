import { useContext } from "react";
import { CestaContext } from "../context/CestaContext";

const CestaContent = () => {
    const context = useContext(CestaContext);

    return (
        <div>
            <h2>Contenido de la cesta</h2>
            <p>Productos en la cesta: {context.cestaItems.join(', ')}</p>
        </div>
    );
};

export default CestaContent;