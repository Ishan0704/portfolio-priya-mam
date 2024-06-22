// Modal.js
import React from 'react';

const Modal = ({ show, onClose, project }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-icon" onClick={onClose}>&times;</span>
        <h2 className='modal-title'>{project.title}</h2>
        <img src={project.image} alt={project.title} className="modal-img" />
        <p>More details about the project can go here.</p>
      </div>
    </div>
  );
};

export default Modal;
