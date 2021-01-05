import React from "react";
import "./styles.css";
import ScrollAnimation from 'react-animate-on-scroll';


function Contact() {

    return (
        <>
            <ScrollAnimation animateIn='flipInY'>
                <h1 className="contactBanner">/* Get in touch */</h1>
            </ScrollAnimation>
            <div className="contactIcons" id="contact">

                <a href="
https://docs.google.com/document/d/1iVctKomEVASiL0OOzTpVUhTImR76w1kYfGyDNXV_aYk/export?format=pdf&attachment=false" target="_blank" className="far fa-file-pdf"></a>
                <a href="mailto:sey.koplik@gmail.com" target="_blank" className="far fa-paper-plane"></a>
                <a href="tel:808-442-2346" className="fas fa-phone"></a>
                <a href="http://www.github.com/seykoplik" target="_blank" className="fab fa-github"></a>
                <a href="http://linkedin.com/in/seykoplik" target="_blank" className="fab fa-linkedin"></a>
            </div>
        </>
    );
}

export default Contact