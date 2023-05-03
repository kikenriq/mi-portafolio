import React, { useState } from "react";
import "./header.css";

const Header = () => {

    const [Toggle, showMenu] = useState(false);

    return(
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">EF</a>

                <div className={Toggle ? "nav__menu show-menu" : 
                "nav__menu"}>

                    <div className="nav__close" onClick={() => showMenu
                (!Toggle)}>
                        <i class="ri-close-line"></i>
                    </div>

                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">About</a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">Skills</a>
                        </li>
                        <li className="nav__item">
                            <a href="#project" className="nav__link">Projects</a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="nav__toggle" onClick={() => showMenu
                (!Toggle)}>
                    <i class="ri-menu-line"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header