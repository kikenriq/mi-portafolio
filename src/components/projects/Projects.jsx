import React from "react";
import './projects.css'
import IMG1 from '../../assets/porfolio1.png'
import IMG2 from '../../assets/porfolio2.png'
import IMG3 from '../../assets/porfolio3.png'
import IMG4 from '../../assets/porfolio4.png'
import IMG5 from '../../assets/porfolio5.png'

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

        
                <div class="heading"> Solar Power landing page website</div>

                <button className="btn-project" href="https://kikenriq.github.io/SolarEnergy-Website/">Live demo</button>
            </div>

            <div class="card">
                <div class="card-image">
                    <img src={ IMG2 } alt="" />
                </div>


                <div class="heading"> Skincare Landing page website</div>

                <button className="btn-project" href="https://kikenriq.github.io/Skin-website/">Live demo</button>
            </div>

            <div class="card">
                <div class="card-image">
                    <img src={ IMG3 } alt="" />
                </div>

               
                <div class="heading"> Futras Landing pages health and nutrition. </div>

                <button className="btn-project" href="">
                    <a href="https://comfy-douhua-04b6e3.netlify.app">
                        Live demo
                    </a>
                </button>
            </div>

            <div class="card">
                <div class="card-image">
                    <img src={ IMG4 } alt="" />
                </div>

                
                <div class="heading"> Travel Landing Page Website </div>

                <button className="btn-project" href="https://kikenriq.github.io/travel-venezuela/">
                    <a href="https://kikenriq.github.io/travel-venezuela/">
                        Live Demo
                    </a>
                </button>
            </div>

            <div class="card">
                <div class="card-image">
                    <img src={ IMG5 } alt="" />
                </div>

             
                <div class="heading"> Eduland | Educational landing page website </div>

                <button className="btn-project">
                    <a href="https://kikenriq.github.io/Eduland/">
                    Live demo
                    </a>
                </button>
            </div>

            </div>
        </section>
    )
}

export default Projects