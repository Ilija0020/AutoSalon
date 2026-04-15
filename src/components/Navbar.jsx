import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/akcije">Akcija</NavLink>
                    </li>
                    <li>
                        <NavLink to="/o-nama">Naša priča</NavLink>
                    </li>
                    <li>
                        <Link to="/ponuda">
                            <img src="https://i.ibb.co/cXh6GXGK/car-logo.png" alt="logo" />
                        </Link>
                    </li>
                    <li>
                        <NavLink to="/informacije">Informacije</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ponuda">Ponuda</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;