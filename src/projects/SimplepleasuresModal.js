import React from 'react';
import simplepleasuresModal from "./images/simplepleasuresModal.svg"

function SimplepleasuresModal({ onClose }) {
    return (
        <div className="Project_modal-overlay" onClick={onClose}>
            <div className="Project_modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="Project_close-button" onClick={onClose}>X</button>
                <div className="Project_modal-title">
                    <div className="Project_modal-name2">SIMPLE PLEASURES</div>
                    <div className="Project_modal-tag2">
                        <div className="Project_modal_content-tag2">Women's Clothing Store</div>
                    </div>
                </div>
                <div class="Project_modal-content-inner">
                    <img src={simplepleasuresModal} alt="simplepleasures" />
                </div>
                <div className="Project_modal-footer2">KIM MIN JIN</div>
            </div>
        </div>
    );
}

export default SimplepleasuresModal;
