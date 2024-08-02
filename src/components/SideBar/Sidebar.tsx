import React, { useState }  from 'react';
import './sideBar.scss';
import {  Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; 
import Modal from '../Modal/ModalPage';
import SidebarImg from '../../assets/images/sidebar-img.jpg'
import SideBarPhoto from '../../assets/images/sidebar-photo.svg'

const Sidebar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
    return (
      <>
      <aside className="sidebar-section">
        <div className="sidebar-section__img--content">
          <img src={SidebarImg} alt="sidebar" className="img-fluid" />
          <img src={SideBarPhoto} alt="sidebar-photo" className="img-fluid second-img" />
        </div>
        <div className="sidebar-section__content">
          <div className="title">Dmitry Valak</div>
          <p>front-end developer blog</p>
          <ul className="social">
            <li><a href="https://www.instagram.com" className="instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram"></a></li>
            <li><a href="https://www.facebook.com" className="facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook"></a></li>
            <li><a href="https://www.pinterest.com" className="pinterest" target="_blank" rel="noopener noreferrer" aria-label="Pinterest"></a></li>
          </ul>
          <div className="subtitle">
          Front-end developer. Practitioner of website layout.
            I have been creating websites since 2012. Worked in several IT companies and worked more than 10,000 hours
            in the creation of sites of varying complexity.
          </div>
          <div className="btn-box d-flex justify-content-between">
            <Nav.Link className="btn" as={NavLink} to="/advertisement">My work</Nav.Link>
            <button className="btn btn-wright" id="open-form-modal-btn" onClick={openModal}>Write to me</button>
          </div>
        </div>
      </aside>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
  };
  
  export default Sidebar;