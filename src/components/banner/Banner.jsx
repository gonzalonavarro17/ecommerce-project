import './Banner.css';
import PropTypes from 'prop-types';
import useAuth from "../../hooks/useAuth.jsx";

const Banner = () => {

    const { isLoggedIn, userData } = useAuth();

    return (
        <section className='Section-news'>
            {isLoggedIn ? (
                <p className='Section-p'>¡Bienvenido de nuevo, {userData.name}!</p>
            ) : (
                <p className='Section-p'>Crea una cuenta para disfrutar de nuevos descuentos</p>
            )}
        </section>
    );
};

Banner.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    userData: PropTypes.shape({
        name: PropTypes.string.isRequired
    })
};

export default Banner;