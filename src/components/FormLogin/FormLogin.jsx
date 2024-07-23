import './FormLogin.css';
import { useState, useRef } from 'react';
import useAuth from "../../hooks/useAuth.jsx";
import { useNavigate, useLocation } from 'react-router-dom';

const LoginForm = () => {
    const { isLoggedIn, handleLogin, handleLogout, userData } = useAuth();
    const nombreRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const nombre = nombreRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (!nombre || !email || !password || !confirmPassword) {
            setErrorMessage('Por favor, completa todos los campos.');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Las contraseñas no coinciden.');
            return;
        }

        setErrorMessage('');
        handleLogin({ name: nombre, email });
        form.reset();
        const pathToNavigate = location.state?.pathname || '/admin/products';
        navigate(pathToNavigate);
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
                <label>
                    Contraseña:
                    <input type='password' name='password' ref={passwordRef} />
                </label>
                <label>
                    Repetir Contraseña:
                    <input type='password' name='confirmPassword' ref={confirmPasswordRef} />
                </label>
                {!isLoggedIn && <button type='submit' className='loginButton'>Login</button>}
                {errorMessage && <p className='error'>{errorMessage}</p>}
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