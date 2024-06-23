import './Footer.css'

export const Footer = () => {
    return (
        <footer>
            <Contenido />
            <hr></hr>
            <p className='Footer-copy'>© 2024 MiTienda. Todos los derechos reservados. Gonzalo Navarro Orejón</p>
    </footer>
    )
}

const Contenido = () => {
    return (
        <div className="Container">
            <Contacto />
            <RedesSociales />
            <Direccion />
        </div>
    )
}

const Contacto = () => {
    return (
        <div className="Container-column">
            <h3>Contacto</h3>
            <ul>
                <li>Email: info@mitienda.com</li>
                <li>Teléfono: +34 123 456 789</li>
            </ul>
        </div>
    )
}

const RedesSociales = () => {
    return (
        <div className="Container-column">
        <h3>Redes Sociales</h3>
            <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
            </ul>
        </div>
    )
}

const Direccion = () => {
    return (
        <div className="Container-column">
            <h3>Dirección</h3>
            <p>Calle Principal, 123</p>
            <p>Ciudad, País</p>
        </div>
    )
}