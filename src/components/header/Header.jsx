import React from "react";
import "./header.css";

const Header = () => {
    return(
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">EF</a>

                <div className="nav__menu">

                    <div className="nav__close">
                        <i class="ri-close-line"></i>
                    </div>

                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="" className="nav__link">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="" className="nav__link">About</a>
                        </li>
                        <li className="nav__item">
                            <a href="" className="nav__link">Skills</a>
                        </li>
                        <li className="nav__item">
                            <a href="" className="nav__link">Proyects</a>
                        </li>
                        <li className="nav__item">
                            <a href="" className="nav__link">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="nav__toggle">
                    <i class="ri-menu-line"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header