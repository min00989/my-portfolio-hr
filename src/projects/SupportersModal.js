import React from 'react';
import supportersModal from "./images/supportersModal.svg"

function SupportersModal({ onClose }) {
    return (
        <div className="Project_modal-overlay" onClick={onClose}>
            <div className="Project_modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="Project_close-button" onClick={onClose}>X</button>
                <div className="Project_modal-title">
                    <div className="Project_modal-name2">Supporters</div>
                    <div className="Project_modal-tag2">
                        <div className="Project_modal_content-tag2">KOREA CONSUMER AGENCY</div>
                    </div>
                </div>
                <div class="Project_modal-content-inner">
                    <img src={supportersModal} alt="supporters" />
                </div>
                <div className="Project_modal-footer2">KIM MIN JIN</div>
            </div>
        </div>
    );
}

export default SupportersModal;
