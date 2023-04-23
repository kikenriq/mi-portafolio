import React from "react";
import "./contact.css"

const Contact = () => {
    return(
        <section className="contact section" id="contact">
             <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch with me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">

                        <div className="contact__card">
                         <i class="contact__card-icon ri-mail-send-line"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">enriqofm14@gmail.com</span>

                            <a href="" className="contact__button">
                                Write me{" "}
                                <i class="contact__button-icon ri-arrow-right-line"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i class="contact__card-icon ri-whatsapp-line"></i>

                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">+58 414 886.25.47</span>

                            <a href="https://wa.me/584148862547" className="contact__button">
                                Write me{" "}
                                <i class="contact__button-icon ri-arrow-right-line"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                        <i class="contact__card-icon ri-telegram-line"></i>

                            <h3 className="contact__card-title">Telegram</h3>
                            <span className="contact__card-data">+58 414 886.25.47</span>

                            <a href="" className="contact__button">
                                Write me{" "}
                                <i class="contact__button-icon ri-arrow-right-line"></i>
                            </a>
                        </div>

                    </div>


                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>

                    <form action="" className="contact__form"> 

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input 
                            type="text" 
                            name="name" 
                            className="contact__form-input" 
                            placeholder="Insert your name"/>
                        </div>
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Mail</label>
                            <input 
                            type="email" 
                            name="email" 
                            className="contact__form-input" 
                            placeholder="Insert your email"/>
                        </div>
                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project</label>
                            <textarea name="project" cols="30" rows="10"
                            className="contact__form-input" placeholder="Write your project" ></textarea>
                        </div>
                        <button className="button button---flex">
                            <a href="#">Send Message</a>
                        </button>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact