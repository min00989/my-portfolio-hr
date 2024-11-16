import React from 'react';
import pawfitModal from "./images/pawfitModal.svg"

function PawfitModal({ onClose }) {
    return (
        <div className="Project_modal-overlay" onClick={onClose}>
            <div className="Project_modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="Project_close-button" onClick={onClose}>X</button>
                <div className="Project_modal-title">
                    <div className="Project_modal-name">PAWFIT</div>
                    <div className="Project_modal-tag">
                        <div className="Project_modal_content-tag">Development Project</div>
                    </div>
                </div>
                <iframe
                    width="930"
                    height="530"
                    src="https://www.youtube.com/embed/5bSw6qp3nmU"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="Project_modal-video"
                ></iframe>
                <div class="Project_modal-content-inner">
                    <img src={pawfitModal} alt="PAWFIT" />
                </div>
                <div className="Project_modal-footer">KIM MIN JIN</div>
            </div>
        </div>
    );
}

export default PawfitModal;
