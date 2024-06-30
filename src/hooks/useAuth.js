import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const userLogin = () => {
    const context = useContext(UserContext);

    return context;
};

export default userLogin;