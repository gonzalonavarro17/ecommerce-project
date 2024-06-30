import { createContext, useState } from "react";

export const CestaContext = createContext();

export const CestaProvider = ({ children }) => {
    const [ cestaItems, setCestaItems ] = useState([]);
     
    const addToCart = (item) => {
        setCestaItems([ ...cestaItems, item ]);
    };

    return (
        <CestaContext.Provider value={{ cestaItems, addToCart }}>
            { children }
        </CestaContext.Provider>
    );
};