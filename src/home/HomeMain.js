import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { debounce } from "lodash";
import './HomeMain.css';
import kimminjinPhoto from './images/kimminjinPhoto.jpg';
import main from './images/Main.jpg';
import home1 from './images/home1.jpg';
import home2 from './images/home2.jpg';
import bfm from './images/bfm.svg';
import BusinessManagement from './images/BusinessManagement.svg';
import pawfit from './images/pawfit.jpg';
import simplepleasures from './images/simplepleasures.svg';
import sungshin from './images/sungshin.svg';

const images = [
    { src: BusinessManagement, alt: 'Business Management' },
    { src: simplepleasures, alt: 'Simple Pleasures' },
    { src: pawfit, alt: 'Pawfit' },
    { src: bfm, alt: 'BFM' },
    { src: sungshin, alt: 'Sungshin' },
];

function HomeMain() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

  // 스크롤 이벤트에 디바운스 적용
    const handleScroll = debounce(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 500);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

  // 현재 중앙에 있는 이미지와 위아래 이미지를 계산
    const getDisplayImages = () => {
        const upper2Index = (currentIndex - 2 + images.length) % images.length;
        const upperIndex = (currentIndex - 1 + images.length) % images.length;
        const lowerIndex = (currentIndex + 1) % images.length;
        const lower2Index = (currentIndex + 2) % images.length;

        return [
        { ...images[upper2Index], position: "upper2" },
        { ...images[upperIndex], position: "upper" },
        { ...images[currentIndex], position: "center" },
        { ...images[lowerIndex], position: "lower" },
        { ...images[lower2Index], position: "lower2" },
        ];
    };

    const handleCenterClick = () => {
        navigate('/projects');
        window.scrollTo(0, 0);
    };

    return (
        <div className="HomeMain_container">
        <div className="HomeMain_conatent1">
            <img src={kimminjinPhoto} alt="증명사진" />
            <div className="HomeMain_name">김민진</div>
        </div>
        <div className="Homemain_line"></div>
        <div className="growth-section">
            <div className="growth-section_ment1">On a Journey of Growth and Innovation, Together.</div>
            <img src={main} alt="main 사진" />
            <div className="growth-section_ment2">성장과 혁신의 여정에 함께하겠습니다.</div>
        </div>
        <div className="Homemain_Endeavors-container">
            <div className="Homemain_Endeavors-title">Endeavors</div>
            <div className="Homemain_Endeavors-bg">
                <img src={home1} alt="배경 이미지 1" className="Homemain_Endeavors-img1" />
                <img src={home2} alt="배경 이미지 2" className="Homemain_Endeavors-img2" />
            </div>
            <div className="carousel">
                {getDisplayImages().map((image, index) => (
                <div
                    key={index}
                    className={`carousel-image ${image.position}`}
                    style={{
                    backgroundImage: `url(${image.src})`,
                    }}
                    aria-label={image.alt}
                    onClick={image.position === "center" ? handleCenterClick : null} // center일 때만 클릭 이벤트
                />
                ))}
            </div>
            </div>
        </div>
    );
}


export default HomeMain;
