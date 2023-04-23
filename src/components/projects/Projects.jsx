import React from "react";
import './projects.css'
import IMG1 from '../../assets/porfolio1.png'
import IMG2 from '../../assets/porfolio2.png'

const Projects = () => {
    return(
        <section className="project section" id="Projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="container porfolio__container">

                <article className="porfolio__item">
                    <div className="porfolio__item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>Solar-Power Landing page Website.</h3>
                    <div className="porfolio__item-cta">
                        <a href="https://kikenriq.github.io/SolarEnergy-Website/" className="btn btn-primary" taget='_blank'>Live Demo</a>
                    </div>
                </article>

                <article className="porfolio__item">
                    <div className="porfolio__item-image">
                        <img src={IMG2} alt="" />
                    </div>
                    <h3>Title Project</h3>
                    <div className="porfolio__item-cta">
                        <a href="" className="btn btn-primary" taget='_blank'>Live Demo</a>
                    </div>
                </article>

            </div>
        </section>
    )
}

export default Projects