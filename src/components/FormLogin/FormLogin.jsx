import { useState } from "react";
import "./FormLogin.css"

function Form({ onLogin, onLogout, isLoggedIn }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        if (!name || !email) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        const user = { name, email };
        onLogin(user);
    };

    const handleLogout = () => {
        onLogout();
    };


    return (
        <div className="form-login">
            <input 
                type="text" 
                placeholder="Nombre"  
                value={name} 
                onChange={(e) => setName( e.target.value )}
            />
            <input 
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail( e.target.value )}
            />
            <button className="loginButton" onClick={handleLogin} >Login</button>
            <button className="logoutButton" onClick={handleLogout} >Logout</button>
        </div>
    );
};

export default Form;