import React from "react";
import "./footer.css"

const Footer = () =>{
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">EF</h1>

                <ul className="footer__list">

                    <li>
                        <a href="#Home" className="footer__link">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#about" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#about" className="footer__link">Contact</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://github.com/kikenriq" className="home__social-icon" target="_blank">
                        <i class="ri-github-fill"></i> 
                    </a>

                    <a href="https://www.linkedin.com/in/enrique-farreras/" className="home__social-icon" target="_blank">
                        <i class="ri-linkedin-box-fill"></i>
                    </a>

                    <a href="" className="home__social-icon" target="_blank">
                        <i class="ri-behance-fill"></i>
                    </a>

                </div>

                <span className="footer__copy"> Enrique Farreras. All rigths reserved 2023.</span>
            </div>
        </footer>
    )
}

export default Footer