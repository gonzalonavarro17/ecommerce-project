import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx"

export const useTheme = () => {
    const context = useContext(ThemeContext);

    return context;
};