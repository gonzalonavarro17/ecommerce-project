import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ userData, setUserData ] = useState({});

    useEffect(() => {
        const storedUser = localStorage.getItem("userdata");
        if (storedUser) {
            setUserData(JSON.parse(storedUser));
            setIsLoggedIn(true);
        }
    }, [])

    const handleLogin = ({ name, email }) => {
        const isAdmin = email.includes("@admin") ? "admin" : "user";
        setIsLoggedIn(true);
        const userDataObj = { name, email, role: isAdmin };
        setUserData(userDataObj);
        localStorage.setItem("userData", JSON.stringify(userDataObj));
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserData({});
        localStorage.removeItem("userData");
    };

    const authContextValue = {
        isLoggedIn,
        userData,
        handleLogin,
        handleLogout,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};