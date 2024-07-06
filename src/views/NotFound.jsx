import { Link } from "react-router-dom";
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="div-notfound">
            <h1 className="h1-notfound">Page not found</h1>
            <Link to="/" className="link-notfound">Volver a la página principal</Link>
        </div>
    );
};

export default NotFound;
