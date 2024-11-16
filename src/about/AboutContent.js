import React from "react";
import { useInView } from 'react-intersection-observer';
import './AboutContent.css';
import kimminjin from './images/kimminjin.jpg';

function AboutContent() {
    const { ref: keywordsRef, inView: keywordsInView } = useInView({
        triggerOnce: true,
        threshold: 0.1, // 스크롤 영역에 10%가 들어왔을 때 트리거
    });

    return(
        <div className="About_container">
            <div className="About_ment">안녕하세요.<br/>조직 내 구성원들이 보다 나은 환경에서 성장할 수 있도록 조율과 지원에 최선을 아끼지 않는 김민진입니다.</div>
            <div className="About_profile-content">
                <div className="About_profile">
                    <img src={kimminjin} alt="김민진 사진" className="profile-img"/>
                    <div className="profile-circle"></div>
                </div>
                <div className="About_profile-info">
                    <div className="About_profile-info-name1">김민진</div>
                    <div className="About_profile-info-name2">KIM MIN JIN</div>
                    <div className="About_profile-info-birth">1999.06.25</div>
                </div>
            </div>
            <div className="About_line"></div>
            <div className="About_experience">
                <div className="About_experience-name">Education</div>
                <div className="About_experience-content">2015.03 - 2018.02 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 숙지고등학교(졸업)</div>
                <div className="About_experience-content">2018.03 - 2022.02 &nbsp;&nbsp;&nbsp;&nbsp; 성신여자대학교(졸업) &nbsp;&nbsp;&nbsp;&nbsp; 소비자생활문화산업학과 / 비즈니스커뮤니케이션학과(복수전공) &nbsp;&nbsp;&nbsp;&nbsp; 학점(4.04 / 4.5) </div>
            </div>
            <div className="About_line"></div>
            <div className="About_experience">
                <div className="About_experience-name">Training & Development</div>
                <div className="About_experience-content">2024.04 - 2024.10 &nbsp;&nbsp;&nbsp;&nbsp; 한국소프트웨어인재개발원 &nbsp;&nbsp;&nbsp;&nbsp; Java/Python 풀스택 전문가 양성 과정 (수료)</div>
            </div>
            <div className="About_line"></div>
            <div className="About_experience">
                <div className="About_experience-name">Experience</div>
                <div className="About_experience-content">2023.11 - 2024.04 &nbsp;&nbsp;&nbsp;&nbsp; 심플플래져스 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2030 여성 의류 쇼핑몰 운영</div>
                <div className="About_experience-content">2022.01 - 2023.01 &nbsp;&nbsp;&nbsp;&nbsp; 알티에스시스템(주) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 효율적인 세무업무 처리를 위한 ‘지방세정보시스템 유지보수 사업' 프로젝트 사업관리</div>
            </div>
            <div className="About_line"></div>
            <div className="About_experience">
                <div className="About_experience-name">Activities</div>
                <div className="About_experience-content">2021.03 - 2021.06 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 강북구사회적경제통합지원센터 현장실습</div>
                <div className="About_experience-content">2019.09 - 2020.08 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 성신여자대학교 학생홍보대사 FORUS</div>
                <div className="About_experience-content">2019.03 - 2020.12 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 패션마케팅 동아리 BFM</div>
            </div>
            <div className="About_line"></div>
            <div className="About_keyword-container" ref={keywordsRef}>
                <div className={`About_keyword-row ${keywordsInView ? 'in-view' : ''}`}>
                    <div className="About_keyword" style={{ "--i": 3 }}>성장추구형</div>
                    <div className="About_keyword" style={{ "--i": 2 }}>사람 중심 사고</div>
                    <div className="About_keyword" style={{ "--i": 3 }}>공감능력</div>
                </div>
                <div className={`About_keyword-row ${keywordsInView ? 'in-view' : ''}`}>
                    <div className="About_keyword" style={{ "--i": 3}}>자기성찰형</div>
                    <div className="About_keyword" style={{ "--i": 2 }}>적극적 리스너</div>
                    <div className="About_keyword-main" style={{ "--i": 1 }}>김민진</div>
                    <div className="About_keyword" style={{ "--i": 2 }}>책임감</div>
                    <div className="About_keyword" style={{ "--i": 3 }}>자각력</div>
                </div>
                <div className={`About_keyword-row ${keywordsInView ? 'in-view' : ''}`}>
                    <div className="About_keyword" style={{ "--i": 3}}>세심함</div>
                    <div className="About_keyword" style={{ "--i": 2 }}>시간관리</div>
                    <div className="About_keyword" style={{ "--i": 2 }}>협업</div>
                    <div className="About_keyword" style={{ "--i": 2 }}>개선 지향적</div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;