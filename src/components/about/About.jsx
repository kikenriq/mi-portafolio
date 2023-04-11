import React from "react";
import './about.css'
import AboutImg from '../../assets/about.jpg'
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
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Qui magni quam cum adipisci consectetur debitis repellendus 
                        cupiditate natus dicta odit! Cumque magnam vero libero quidem 
                        iusto in soluta alias odio.
                    </p>

                    <a href="" className="button button--flex">Download CV</a>
                </div>
            </div>
        </section>
    )
}

export default About