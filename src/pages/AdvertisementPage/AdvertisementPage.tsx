
import React from 'react';
import Header from '../../components/Header/Header';
import './advertisementPage.scss'; 
import { workItems } from '../../data/contentData';


const AdvertisementPage: React.FC = () => {
  
  return (
    <>
    <Header />
    <section className="my-work">
      <h5>My work</h5>
      {workItems.map((item, index) => (
        <div key={index} className="my-work__item d-flex">
          <img src={item.imageSrc} alt={item.altText} className="img-fluid" />
          <div className="my-work__item--content">
            <div className="title">{item.title}</div>
            <div className="subtitle">{item.subtitle}</div>
            <div className="btn-box d-flex justify-content-between">
              {item.tags.map((tag, tagIndex) => (
                <button key={tagIndex} className="btn btn-work" type="submit">
                  {tag}
                </button>
              ))}
            </div>
            <div className="d-flex justify-content-end">
                <button className="btn btn-wright" type="submit">
                  {item.linkText}
                </button>
              </div>
          </div>
        </div>
      ))}
    </section>
    </>
  );
};

export default AdvertisementPage;
