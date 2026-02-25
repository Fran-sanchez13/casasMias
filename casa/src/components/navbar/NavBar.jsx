import { Link } from "react-router-dom";

function NavBar() {
    return (

        <nav>
            <h2>Mi app</h2>

            <ul>
                <li><link to="/">Home</link>
                </li>

                <li><link to="/productos">Productos</link>
                </li>

                <li><link to="/contactos">Contactos</link>
                </li>
                
            </ul>
        </nav>


    )
}

export default NavBar;