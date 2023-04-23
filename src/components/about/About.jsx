import React from "react";
import './about.css'
import AboutImg from '../../assets/about.jpg'
import Resume from '../../assets/Resume.pdf'
import Info from './Info'

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introdction</span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />

                <div className="about__data">
                    <Info />

                    <p className="about__description">
                    Crafting digital experiences with code and pixels. 
                    Experienced Frontend Developer specializing
                    in HTML, CSS, JavaScript, React, Tailwind and Next.js. 
                    Let's make something beautiful together!
                    </p>

                    <a download="" href={Resume} className="button button--flex"> <i class="ri-download-line"></i>Download CV   </a>
                </div>
            </div>
        </section>
    )
}

export default About