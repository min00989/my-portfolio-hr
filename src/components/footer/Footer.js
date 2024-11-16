import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';
import footerImg from './images/footer_img.jpg';


function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // 부드럽게 스크롤 이동
    };

    return(
        <div className="Footer_container">
            <div className="Footer_coment">
                <div>Solving Problems,<br/>
                Creating Value.</div>
            </div>
            <div className="Footer_content">
                <div className="Footer_content_1">
                    <div className="Footer_contact1">contact</div>
                    <div className="Footer_contact2">010.2487.3890<br/>dnflalswls@naver.com</div>
                    <div className="Footer_menu">
                        <Link to="/about" className="navbar-link" onClick={scrollToTop}>
                            <div>About</div>
                        </Link>
                        <Link to="/skills" className="navbar-link" onClick={scrollToTop}>
                            <div>Skills</div>
                        </Link>
                        <Link to="/projects" className="navbar-link" onClick={scrollToTop}>
                            <div>Projects</div>
                        </Link>
                    </div>
                    <div className="Footer_copyright">© 2024 Kim Minjin. Designed and Developed by Kim Minjin.</div>
                </div>
                <img src={footerImg} alt="푸터 이미지" className="Footer_img"/>
            </div>
            <div className="Footer_name">KIM MIN JIN</div>

        </div>
    )
}

export default Footer;