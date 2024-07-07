import { URL_INDEX } from "../utils/constants";
import { Link } from "react-router-dom";

import '../../src/styles/Header.css';

export default function Header() {
    return (
        <div>
            <header className="container-fluid">
                <nav className="row justify-content-around header-fila">
                    <div className="col-12 col-md-12 col-lg-12 nav-inicio">
                        <ul>
                            <li><Link to={URL_INDEX}>Inicio</Link></li>
                            <li>|</li>
                            <li><Link>Reto Developer full stack</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}
