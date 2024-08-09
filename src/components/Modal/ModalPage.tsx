
import React, { useState, ChangeEvent, FormEvent } from 'react';
import './modalPage.scss'; 

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name ? '' : 'Name is required',
      email: validateEmail(formData.email) ? '' : 'Please enter a valid email address',
      message: formData.message ? '' : 'Message is required'
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(error => error !== '');
    if (!hasErrors) {
      console.log('Form submitted:', formData);
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      onClose(); 
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-bgd">
      <div className="modal-form-container">
        <button className="close-btn" onClick={onClose}>x</button>
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-floating">
            <input
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              id="name"
              placeholder="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <label htmlFor="name">Enter a name</label>
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>
          <div className="form-floating">
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleInputChange}
            />
            <label htmlFor="email">Email address</label>
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <div className="form-floating">
            <input
              type="text"
              className={`form-control ${errors.message ? 'is-invalid' : ''}`}
              id="message"
              placeholder="text"
              value={formData.message}
              onChange={handleInputChange}
            />
            <label htmlFor="message">Message text</label>
            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
          </div>
          <button className="btn btn-wright" type="submit">Submit</button>
          <p className="modal-form__subtitle">e-mail: info@mywebsite.ru тел: +943-232-856-22</p>
        </form>
      </div>
    </div>
  );
};

export default Modal;