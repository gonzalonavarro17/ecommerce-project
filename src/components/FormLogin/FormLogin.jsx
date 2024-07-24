import './FormLogin.css';
import { useState } from 'react';
import useAuth from "../../hooks/useAuth.jsx";
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
    const { isLoggedIn, handleLogin, handleLogout, userData } = useAuth();
    const { register, handleSubmit, formState: { errors }, clearErrors } = useForm();
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const onSubmit = (data) => {
        if (data.password !== data.confirmPassword) {
            setErrorMessage('Las contraseñas no coinciden.');
            return;
        }

        setErrorMessage('');
        handleLogin({ name: data.nombre, email: data.email });
        const pathToNavigate = location.state?.pathname || '/admin/products';
        navigate(pathToNavigate);
    };

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Nombre:
                    <input 
                        type='text' 
                        {...register('nombre', { required: true, minLength: 3 })}
                        onBlur={() => {
                            if (!errors.nombre) clearErrors('nombre');
                        }}
                    />
                    {errors.nombre && <p className='error'>El nombre es obligatorio y debe tener al menos 3 caracteres.</p>}
                </label>
                <label>
                    Email:
                    <input 
                        type='email' 
                        {...register('email', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })}
                        onBlur={() => {
                            if (!errors.email) clearErrors('email');
                        }}
                    />
                    {errors.email && <p className='error'>Introduce un email válido.</p>}
                </label>
                <label>
                    Contraseña:
                    <input 
                        type='password' 
                        {...register('password', { required: true, minLength: 6 })}
                        onBlur={() => {
                            if (!errors.password) clearErrors('password');
                        }}
                    />
                    {errors.password && <p className='error'>La contraseña es obligatoria y debe tener al menos 6 caracteres.</p>}
                </label>
                <label>
                    Repetir Contraseña:
                    <input 
                        type='password' 
                        {...register('confirmPassword', { required: true, minLength: 6 })}
                        onBlur={() => {
                            if (!errors.confirmPassword) clearErrors('confirmPassword');
                        }}
                    />
                    {errors.confirmPassword && <p className='error'>Repite la contraseña correctamente.</p>}
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