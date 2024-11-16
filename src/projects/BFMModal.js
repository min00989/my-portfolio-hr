import React from 'react';
import bfmModal from "./images/bfmModal.svg"

function BFMModal({ onClose }) {
    return (
        <div className="Project_modal-overlay" onClick={onClose}>
            <div className="Project_modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="Project_close-button" onClick={onClose}>X</button>
                <div className="Project_modal-title">
                    <div className="Project_modal-name2">BFM</div>
                    <div className="Project_modal-tag2">
                        <div className="Project_modal_content-tag2">Fashion Marketing Society</div>
                    </div>
                </div>
                <div class="Project_modal-content-inner">
                    <img src={bfmModal} alt="bfm" />
                </div>
                <div className="Project_modal-footer">KIM MIN JIN</div>
            </div>
        </div>
    );
}

export default BFMModal;
