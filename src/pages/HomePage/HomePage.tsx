import React, { useRef, useState } from 'react';
import './homePage.scss';
import Header from '../../components/Header/Header';
// import { useSearch } from '../../components/SearchContext/SearchContext';
import ContentSection from './components/ContentSection';
import VideoBlog from './components/VideoBlog';
import AboutMeFirst from '../../assets/images/aboutme-1.png'
import AboutMeSecond from '../../assets/images/aboutme-2.png'
import AboutMeThird from '../../assets/images/aboutme-3.png'
import AboutMeForth from '../../assets/images/aboutme-4.png'
import Baner from '../../assets/images/baner.jpg'
import Baner3 from '../../assets/images/baner-3.jpg'


function HomePage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  

  const fileInputRef = useRef<HTMLInputElement>(null);

  const aboutMeItems = [
    { src: AboutMeFirst, title: 'Relaxing in nature', subtitle: '21.09.2020' },
    { src: AboutMeSecond, title: 'Finalizing a complex project', subtitle: '15.09.2020' },
    { src: AboutMeThird, title: 'Moved into a new apartment', subtitle: '11.09.2020' },
    { src: AboutMeForth, title: 'Autumn is here!', subtitle: '28.08.2020' }
  ];
    const handleFileSelect = () => {
      if (fileInputRef.current) {
      fileInputRef.current.click();
      }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        setSelectedFile(e.target.files[0]);
      }
    };
    const handleUpload = () => {
      if (selectedFile) {

        console.log('Завантажити файл:', selectedFile);
        setSelectedFile(null);
      }
    };
 

   
    return (
      <div className="container">
        <Header  />
        <section className="about-me">
          <div className="about-me-content d-flex justify-content-between">
          {aboutMeItems.map((item, index) => (
            <div className="about-me__item" key={index}>
              <img src={item.src} alt="aboutme" className="img-fluid" />
              <p className="about-me__item--title">{item.title}</p>
              <p className="about-me__item--subtitle">{item.subtitle}</p>
            </div>
          ))}
          </div>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Write something"
                aria-label="Write something with two button addons" />
            <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
            <button className="btn btn-photo" type="button" onClick={handleFileSelect}></button>
            <button className="btn btn-send" type="button" onClick={handleUpload}>
            </button>
          </div>
          <div className="content-part">
            <div className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna.
              Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu
              egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas
              ornare vel volutpat.
              </div>
            <div className="secondary-subtitle">21.06.2020</div>
          </div>

          <img src={Baner} alt="baner" className="img-fluid" />
          <ContentSection
            title="How to write code quickly and painlessly?"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat."
            moreText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat."
            date="21.06.2020"
            category="website creation"
          />
          <VideoBlog/>
          <img src={Baner3} alt="baner" className="img-fluid"></img>
          <ContentSection
            title="How I went to FrontEnd Conf 2021."
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat."
            moreText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat."
            date="21.06.2020"
            category="video promotion"
          />
         
      </section>
    </div>

  );
}

export default HomePage;