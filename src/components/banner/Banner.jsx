import './Banner.css';

const Banner = ({ isLoggedIn, user }) => {
    return (
        <section className='Section-news'>
            {isLoggedIn ? (
                <p className='Section-p'>¡Bienvenido de nuevo, {user?.name}!</p>
            ) : (
                <p className='Section-p'>Crea una cuenta para disfrutar de nuevos descuentos</p>
            )}
        </section>
    );
};

export default Banner;