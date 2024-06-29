import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [ theme, setTheme ] = useState("Light");

    const toggleTheme = () => {
        setTheme(( prevTheme ) => ( prevTheme === "Light" ? "dark" : "Light" ));
    };

    const themeContextValues = {
        theme,
        toggleTheme,
    };
    return (
        <ThemeContext.Provider value={ themeContextValues }>
            { children }
        </ThemeContext.Provider>
    );
};