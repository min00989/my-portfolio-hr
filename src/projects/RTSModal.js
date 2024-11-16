import React from 'react';
import rtsModal from "./images/rtsModal.svg"

function RTSModal({ onClose }) {
    return (
        <div className="Project_modal-overlay" onClick={onClose}>
            <div className="Project_modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="Project_close-button" onClick={onClose}>X</button>
                <div className="Project_modal-title">
                    <div className="Project_modal-name2">RTS Systems Inc.</div>
                    <div className="Project_modal-tag2">
                        <div className="Project_modal_content-tag2">Project Business Management</div>
                    </div>
                </div>
                <div class="Project_modal-content-inner">
                    <img src={rtsModal} alt="rts" />
                </div>
                <div className="Project_modal-footer2">KIM MIN JIN</div>
            </div>
        </div>
    );
}

export default RTSModal;
