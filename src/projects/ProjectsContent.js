import React, {useState, useEffect} from "react";
import './ProjectsContent.css';
import pawfit from "./images/pawfit.svg";
import simplepleasures from "./images/simplepleasures.svg";
import BusinessManagement from "./images/BusinessManagement.svg";
import sungshin from "./images/sungshin.svg";
import bfm from "./images/bfm.svg";
import FieldPlacement from "./images/FieldPlacement.svg";
import Supporters from "./images/Supporters.svg";

import PawfitModal from './PawfitModal';
import SimplepleasuresModal from './SimplepleasuresModal';
import RTSModal from './RTSModal';
import ForusModal from './ForusModal';
import BFMModal from './BFMModal';
import FieldPlacementModal from './FieldPlacementModal';
import SupportersModal from './SupportersModal';

function ProjectsContent() {
    const [showPawfitModal, setShowPawfitModal] = useState(false);
    const [showSimplePleasuresModal, setShowSimplePleasuresModal] = useState(false);
    const [showRTSModal, setShowRTSModal] = useState(false);
    const [showForusModal, setShowForusModal] = useState(false);
    const [showBFMModal, setShowBFMModal] = useState(false);
    const [showFieldPlacementModal, setShowFieldPlacementModal] = useState(false);
    const [showSupportersModal, setShowSupportersModal] = useState(false);

    useEffect(() => {
        if (showPawfitModal || showSimplePleasuresModal || showRTSModal || showForusModal || showBFMModal || showFieldPlacementModal || showSupportersModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto'; 
        }
    }, [showPawfitModal, showSimplePleasuresModal, showRTSModal, showForusModal, showBFMModal, showFieldPlacementModal, showSupportersModal]);



    return(
        <div className="Project_container">
            <div className="ProjectContent_container">
                <div className="ProjectContent_name">PROJECTS</div>
                <div className="Project_line"></div>
                <div className="ProjectContent_content">
                    <div className="ProjectContent_content-name">
                        <div className="ProjectContent_content-name2">PAWFIT</div>
                        <div className="ProjectContent_content-date2">2024</div>
                        <div className="ProjectContent-tag2" >
                            <div className="ProjectContent_content-tag2">Development Project</div>
                        </div>
                    </div>
                    <img src={pawfit} alt="Pawfit Img" className="ProjectContent-Pawfit" onClick={() => setShowPawfitModal(true)} />
                    {showPawfitModal && <PawfitModal onClose={() => setShowPawfitModal(false)} />}
                </div>
                <div className="Project_line"></div>
                <div className="ProjectContent_content">
                    <div className="ProjectContent_content-name">
                        <div className="ProjectContent_content-name2">SIMPLE PLEASURES</div>
                        <div className="ProjectContent_content-date2">2023 - 2024</div>
                        <div className="ProjectContent-tag2" >
                            <div className="ProjectContent_content-tag2">Women's Clothing Store</div>
                        </div>
                    </div>
                    <img src={simplepleasures} alt="simplepleasures Img" className="ProjectContent-simplepleasures" onClick={() => setShowSimplePleasuresModal(true)} />
                    {showSimplePleasuresModal && <SimplepleasuresModal onClose={() => setShowSimplePleasuresModal(false)} />}
                </div>
                <div className="Project_line"></div>
                <div className="ProjectContent_content">
                    <div className="ProjectContent_content-name">
                        <div className="ProjectContent_content-name2">RTS Systems Inc.</div>
                        <div className="ProjectContent_content-date2">2022 - 2023</div>
                        <div className="ProjectContent-tag2" >
                            <div className="ProjectContent_content-tag2">Project Business Management</div>
                        </div>
                    </div>
                    <img src={BusinessManagement} alt="BusinessManagement Img" className="ProjectContent-BusinessManagement" onClick={() => setShowRTSModal(true)} />
                    {showRTSModal && <RTSModal onClose={() => setShowRTSModal(false)} />}
                </div>
                <div className="Project_line"></div>
                <div className="ProjectContent_content">
                    <div className="ProjectContent_content-name">
                        <div className="ProjectContent_content-name2">FORUS</div>
                        <div className="ProjectContent_content-date2">2019 - 2020</div>
                        <div className="ProjectContent-tag2" >
                            <div className="ProjectContent_content-tag2">Student Ambassador</div>
                        </div>
                    </div>
                    <img src={sungshin} alt="sungshin Img" className="ProjectContent-sungshin" onClick={() => setShowForusModal(true)} />
                    {showForusModal && <ForusModal onClose={() => setShowForusModal(false)} />}
                </div>
                <div className="Project_line"></div>
                <div className="ProjectContent_content">
                    <div className="ProjectContent_content-name">
                        <div className="ProjectContent_content-name2">BFM</div>
                        <div className="ProjectContent_content-date2">2019 - 2020</div>
                        <div className="ProjectContent-tag2" >
                            <div className="ProjectContent_content-tag2">Fashion Marketing Society</div>
                        </div>
                    </div>
                    <img src={bfm} alt="bfm Img" className="ProjectContent-bfm" onClick={() => setShowBFMModal(true)} />
                    {showBFMModal && <BFMModal onClose={() => setShowBFMModal(false)} />}
                </div>
                <div className="Project_line"></div>
                <div className="ProjectContent-wrapper">
                    <div className="ProjectContent-title">ETC.</div>
                    <div className="ProjectContent_content">
                        <div className="ProjectContent_content-name">
                            <img src={FieldPlacement} alt="FieldPlacement Img" className="ProjectContent-FieldPlacement"  onClick={() => setShowFieldPlacementModal(true)} />
                            {showFieldPlacementModal && <FieldPlacementModal onClose={() => setShowFieldPlacementModal(false)} />}
                            <div className="ProjectContent_content-name2">Field Placement</div>
                            <div className="ProjectContent_content-date2">2021</div>
                            <div className="ProjectContent-tag3" >
                                <div className="ProjectContent_content-tag3">GANGBUKGU SOCIAL ECONOMY CENTER</div>
                            </div>
                        </div>
                        <div className="Project_divider"></div>
                        <div className="ProjectContent_content-name">
                            <img src={Supporters} alt="Supporters Img" className="ProjectContent-Supporters" onClick={() => setShowSupportersModal(true)} />
                            {showSupportersModal && <SupportersModal onClose={() => setShowSupportersModal(false)} />}
                            <div className="ProjectContent_content-name2">Supporters</div>
                            <div className="ProjectContent_content-date2">2018</div>
                            <div className="ProjectContent-tag3" >
                                <div className="ProjectContent_content-tag3">KOREA CONSUMER AGENCY</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ProjectContent_ment-container">
                <div className="ProjectContent_ment1">Ready to grow and<br/>
                create value together.</div>
                <div className="ProjectContent_ment2">각 프로젝트를 통해 쌓아온 경험과 배움을 이제 한곳에 집중하여<br/> 더 큰 가치를 만들어내고 싶습니다. 얻은 모든 역량과 열정으로,<br/> 함께 협력하고
                문제를 해결해 나가며 새로운 가능성을 열어가겠습니다.</div>
            </div>
        </div>
    )
}

export default ProjectsContent;