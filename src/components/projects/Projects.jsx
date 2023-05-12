import React from "react";
import './projects.css'
import IMG1 from '../../assets/porfolio1.png'
import IMG2 from '../../assets/porfolio2.png'
import IMG3 from '../../assets/porfolio3.png'

const Projects = () => {
    return(
        <section className="project section" id="project">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="container porfolio__container">

            <div class="card">
                <div class="card-image">
                    <img src={ IMG1 } alt="" />
                </div>

                <div className="heading">
                    <p className="html5">html5</p>
                    <p className="css">CSS</p>
                    <p className="js">JavaScript</p>
                </div>
                <div class="heading"> Solar Power landing page website</div>

                <button className="btn-project" href="">Live demo</button>
            </div>

            <div class="card">
                <div class="card-image">
                    <img src={ IMG2 } alt="" />
                </div>

                <div className="heading">
                    <p className="html5">html5</p>
                    <p className="css">CSS</p>
                    <p className="js">JavaScript</p>
                </div>
                <div class="heading"> Solar Power landing page website</div>

                <button className="btn-project" href="">Live demo</button>
            </div>

            <div class="card">
                <div class="card-image">
                    <img src={ IMG3 } alt="" />
                </div>

                <div className="heading">
                    <p className="html5">html5</p>
                    <p className="css">CSS</p>
                    <p className="js">JavaScript</p>
                </div>
                <div class="heading"> Solar Power landing page website</div>

                <button className="btn-project" href="">Live demo</button>
            </div>

            </div>
        </section>
    )
}

export default Projects