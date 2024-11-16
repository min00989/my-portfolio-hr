import React from "react";
import './ContactContent.css';
import contactImg from "./images/contactImg.png";

function ContactContent() {
    const text =  "CONTACT ME • CONTACT ME • CONTACT ME • CONTACT ME • CONTACT ME • ";

    return(
        <div className="Contact_container">
            <div className="Contact_ment">
                <img src={contactImg} alt="contactImage" />
                <div className="Contact_ment-coment">Thank you for considering my portfolio!<br/>Please feel free to reach out with any<br/>questions or further information requests.</div>
            </div>
            <div className="Contact_container2">
                <div className="Contact_circular-text-container">
                    <div className="Contact_circular-text">
                        {[...text].map((char, index) => (
                            <span
                                key={index}
                                style={{ transform: `rotate(${index * (360 / text.length)}deg) translate(0, -200px)` }} // 각 글자를 원형으로 배치
                            >
                                {char}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="Contact_content">
                        <div className="Contact_line"></div>
                        <div className="Contact_content-text">Contact</div>
                        <div>010-2487-3890</div>
                        <div className="Contact_line"></div>
                        <div className="Contact_content-text">Email</div>
                        <div>dnflalswls@naver.com</div>
                </div>
            </div>
        </div>
    )
}

export default ContactContent;