import React from 'react';
import './sideBar.scss';
import SidebarImg from '../../assets/images/sidebar-img.jpg'
import SideBarPhoto from '../../assets/images/sidebar-photo.svg'

const Sidebar: React.FC = () => {
    return (
      <aside className="sidebar-section">
        <div className="sidebar-section__img--content">
          <img src={SidebarImg} alt="sidebar" className="img-fluid" />
          <img src={SideBarPhoto} alt="sidebar-photo" className="img-fluid second-img" />
        </div>
        <div className="sidebar-section__content">
          <div className="title">Dmitry Valak</div>
          <p>front-end developer blog</p>
          <ul className="social">
            <li><a href="#" className="instagram" target="_blank" rel="noopener noreferrer"></a></li>
            <li><a href="#" className="vk" target="_blank" rel="noopener noreferrer"></a></li>
            <li><a href="#" className="pinterest" target="_blank" rel="noopener noreferrer"></a></li>
          </ul>
          <div className="subtitle">
          Front-end developer. Practitioner of website layout.
            I have been creating websites since 2012. Worked in several IT companies and worked more than 10,000 hours
            in the creation of sites of varying complexity.
          </div>
          <div className="btn-box d-flex justify-content-between">
            <a className="btn" href="mywork.html">My work</a>
            <button className="btn btn-wright" id="open-form-modal-btn">Write to me</button>
          </div>
        </div>
      </aside>
    );
  };
  
  export default Sidebar;