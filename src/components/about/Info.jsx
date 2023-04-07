import React from "react";

const Info = () => {
    return (
        <div className="about__info grid">

            <div className="about__box">
            <i class="ri-award-line about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">+2 Years Working</span>
            </div>

            <div className="about__box">
            <i class="ri-briefcase-3-line about__icon"></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">+10 Projects</span>
            </div>

            <div className="about__box">
            <i class="ri-customer-service-2-fill about__icon"></i>
                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">24/7 Online Support</span>
            </div>
        </div>
    )
}

export default Info