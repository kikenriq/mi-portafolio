import React, { useState } from "react";
import './qualification.css';


const Qualifications = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return(
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 
                    ? "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"}>


                        
                        <i class="ri-graduation-cap-line"></i> Education
                    </div>

                    <div className="qualification__button button--flex">
                        <i class="ri-award-line"></i> Certifications
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className="qualification__content-active">
                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__title">Geological Engineering</h3>
                                <span className="qualification__subtitle">
                                    Universidad De Oriente - Venezuela
                                </span>
                                <div className="qualification__calendar">
                                    <i class="ri-calendar-2-line"></i> 2008 - 2015
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                       
                    </div>

                    <div className="qualification__content">
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Google IT Support Professional Certificate</h3>
                                <span className="qualification__subtitle">
                                    Google/Coursera
                                </span>
                                <div className="qualification__calendar">
                                    <i class="ri-calendar-2-line"></i> 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__title">UX/UI Design + Figma</h3>
                                <span className="qualification__subtitle">
                                    Udemy
                                </span>
                                <div className="qualification__calendar">
                                    <i class="ri-calendar-2-line"></i> 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Meta Frontend Developer</h3>
                                <span className="qualification__subtitle">
                                    Meta/Coursera
                                </span>
                                <div className="qualification__calendar">
                                    <i class="ri-calendar-2-line"></i> 2023
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualifications