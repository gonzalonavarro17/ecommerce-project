import './FormLogin.css';
import { useRef } from 'react';
import useAuth from "../../hooks/useAuth.jsx";
import { useNavigate, useLocation } from 'react-router-dom';

const LoginForm = () => {
    const { isLoggedIn, handleLogin, handleLogout, userData } = useAuth();
    const nombreRef = useRef(null);
    const emailRef = useRef(null);

    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const nombre = nombreRef.current.value;
        const email = emailRef.current.value;

        navigate(location.state.pathname);

        if (nombre && email) {
            handleLogin({ name: nombre, email });
            form.reset();
        } else {
            alert("Por favor, completa todos los campos.");
        }
    };

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input type='text' name='text' ref={nombreRef} />
                </label>
                <label>
                    Email:
                    <input type='email' name='email' ref={emailRef} />
                </label>
                {!isLoggedIn && <button type='submit' className='loginButton'>Login</button>}
            </form>
            {isLoggedIn && (
                <div className='user-info'>
                    <button onClick={handleLogout} type='button' className='logoutButton'>
                        Logout
                    </button>
                    <p>¿Quieres cerrar sesión, {userData.name}?</p>
                </div>
            )}
        </div>
    );
};

export default LoginForm;