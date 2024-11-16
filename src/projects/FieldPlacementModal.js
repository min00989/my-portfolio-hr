import React from 'react';
import fieldPlacementModal from "./images/fieldPlacementModal.svg"

function FieldPlacementModal({ onClose }) {
    return (
        <div className="Project_modal-overlay" onClick={onClose}>
            <div className="Project_modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="Project_close-button" onClick={onClose}>X</button>
                <div className="Project_modal-title">
                    <div className="Project_modal-name2">Field Placement</div>
                    <div className="Project_modal-tag2">
                        <div className="Project_modal_content-tag2">GANGBUKGU SOCIAL ECONOMY CENTER
                        </div>
                    </div>
                </div>
                <div class="Project_modal-content-inner">
                    <img src={fieldPlacementModal} alt="fieldPlacement" />
                </div>
                <div className="Project_modal-footer">KIM MIN JIN</div>
            </div>
        </div>
    );
}

export default FieldPlacementModal;
