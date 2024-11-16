import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ContactContent from "./ContactContent";

function Contact() {
    return(
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <ContactContent/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Contact;