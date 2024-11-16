import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import './SkilsContent.css';
import react from "./images/react.png";
import html from "./images/html.png";
import css from "./images/css.png";
import js from "./images/js.png";
import java from "./images/java.png";
import springboot from "./images/springboot.png";
import oracle from "./images/oracle.png";
import hancom from "./images/hancom.png";
import powerpoint from "./images/powerpoint.png";
import word from "./images/word.png";
import excel from "./images/excel.png";
import skilsback from "./images/skilsback.jpg";
import skilsback2 from "./images/skilsback2.png";
import pawfit from "./images/pawfit.svg";
import simplepleasures from "./images/simplepleasures.svg";
import BusinessManagement from "./images/BusinessManagement.svg";
import sungshin from "./images/sungshin.svg";
import bfm from "./images/bfm.svg";
import workPerformanceSkils from "./images/workPerformanceSkils.svg";


function SkilsContent() {
    const navigate = useNavigate();

    const handleProjectClick = () => {
        navigate('/projects'); // '/project' 경로로 이동
        window.scrollTo(0, 0);
    };

    return(
        <div className="Skils-container">
            <div className="Skils-coment">SKILLS</div>
            <div className="Skils_work-container">
                <div className="Skils_work-ment">Work Performance Skils</div>
                <img src={workPerformanceSkils} alt="Work Performance Skils Img" />
                <div className="Skils_work-coment">
                    다양한 경험을 통해 업무 수행 능력을 키우며 성장해왔습니다.<br/>
                    앞으로도 사회의 일원으로서 꼭 필요한 사람이 되기 위해,<br/> 
                    매 순간 배우려는 자세와 성실함으로 발전하는 모습을 보여드릴 것을 약속드립니다.
                </div>
            </div>
            <div  className="Skils-container_ment">
                <div  className="Skils-ment">인재와 조직의 성장을 지원하며,<br/>사람 중심의 가치를 실현하기 위해<br/>지속적인 배움과 도전을 실천합니다.</div>
                <img src={skilsback2} alt="배경사진" />
            </div>
            <div className="Skils-conainer_bg"  style={{ '--background-image': `url(${skilsback})` }} />
            <div className="Skils-conainer_logo">
                <div className="Skils-conainer_logo3">
                    <img src={hancom} alt="hancom logo" />
                    <img src={powerpoint} alt="powerpoint logo" />
                    <img src={word} alt="word logo" />
                    <img src={excel} alt="excel logo" />
                </div>
                <div className="Skils-conainer_logo2">
                    <img src={java} alt="java logo" />
                    <img src={springboot} alt="springboot logo" />
                    <img src={oracle} alt="oracle logo" />
                </div>
                <div className="Skils-conainer_logo1">
                    <img src={react} alt="react logo" />
                    <img src={html} alt="html logo" />
                    <img src={css} alt="css logo" />
                    <img src={js} alt="js logo" />
                </div>
            </div>
            <div  className="Skils-container_project">
                <div className="Skils-container_project-ment">Explore Project</div>
                <div className="container" style={{ marginLeft: '-30px', marginTop: '-100px' }}>
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block w-100 custom-carousel-image" src={pawfit} alt="Pawfit Project" onClick={handleProjectClick} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100 custom-carousel-image" src={simplepleasures} alt="Simple Pleasures" onClick={handleProjectClick}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100 custom-carousel-image" src={BusinessManagement} alt="BusinessManagement" onClick={handleProjectClick} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100 custom-carousel-image" src={sungshin} alt="sungshin" onClick={handleProjectClick} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100 custom-carousel-image" src={bfm} alt="bfm" onClick={handleProjectClick} />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default SkilsContent;