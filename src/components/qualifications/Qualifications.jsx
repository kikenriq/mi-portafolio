import React from "react";
import './qualification.css';


const Qualifications = () => {
    return(
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button qualification__active button--flex">
                        Education
                    </div>

                    <div className="qualification__button button--flex">
                        Certifications
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className="qualification__content">
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

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title"></h3>
                                <span className="qualification__subtitle">
                                    Universidad De Oriente - Venezuela
                                </span>
                                <div className="qualification__calendar">
                                    <i class="ri-calendar-2-line"></i> 2008 - 2015
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