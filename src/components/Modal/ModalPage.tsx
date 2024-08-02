// components/Modal.tsx
import React from 'react';
import './modalPage.scss'; 

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-bgd">
      <div className="modal-form-container">
        <button className="close-btn" onClick={onClose}>x</button>
        <form className="modal-form" action="#" data-netlify="true" id="form">
          <div className="form-floating">
            <input type="text" className="form-control" id="user-name" placeholder="name" />
            <label htmlFor="user-name">Enter a name</label>
          </div>
          <div className="form-floating">
            <input type="email" className="form-control" id="user-email" placeholder="name@example.com" />
            <label htmlFor="user-email">Email address</label>
          </div>
          <div className="form-floating">
            <input type="text" className="form-control" id="user-message" placeholder="text" />
            <label htmlFor="user-message">Message text</label>
          </div>
          <button className="btn btn-wright mb-5" id="launch-btn" type="submit">Submit</button>
          <p className="modal-form__subtitle">e-mail: info@mywebsite.ru тел: +943-232-856-22</p>
        </form>
      </div>
    </div>
  );
};

export default Modal;
