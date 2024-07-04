import './FormLogin.css';
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
    const { isLoggedIn, handleLogin, handleLogout, userData } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const nombre = form.nombre.value;
        const email = form.email.value;

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
                    <input type='text' name='text' />
                </label>
                <label>
                    Email:
                    <input type='email' name='email' />
                </label>
                {!isLoggedIn && <button type='submit'>Login</button>}
            </form>
            {isLoggedIn && (
                <div className='user-info'>
                    <button onClick={handleLogout} type='button'>
                        Logout
                    </button>
                    <p>¿Quieres cerrar sesión, {userData.name}?</p>
                </div>
            )}
        </div>
    );
};

export default LoginForm;