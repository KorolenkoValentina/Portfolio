
import React, { useRef, useState } from 'react';
import './homePage.scss';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ContentSection from './components/ContentSection';
import VideoBlog from './components/VideoBlog';
import { aboutMeItems, contentSections, subtitles, banners } from '../../data/contentData';
import { useSearch } from '../../components/SearchContext/SearchContext';

const HomePage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { searchQuery } = useSearch();

  const handleFileSelect = () => fileInputRef.current?.click();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('Завантажити файл:', selectedFile);
      setSelectedFile(null);
    }
  };

  const filterContent = (items: any[], key: string) =>
    items.filter(item => item[key]?.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="container">
      <Header />
      <section className="about-me-section">
        <div className="about-me-content d-flex justify-content-between">
          {filterContent(aboutMeItems, 'title').map((item, index) => (
            <div className="about-me__item" key={index}>
              <Link to={`/about/${item.title.toLowerCase().replace(/ /g, '-')}`}>
              <img src={item.src} alt="aboutme" className="img-fluid" />
              <p className="about-me__item--title">{item.title}</p>
              <p className="about-me__item--subtitle">{item.subtitle}</p>
              </Link>
            </div>
          ))}
        </div>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Write something"
            aria-label="Write something with two button addons"
          />
          <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
          <button className="btn btn-photo" type="button" onClick={handleFileSelect}></button>
          <button className="btn btn-send" type="button" onClick={handleUpload}></button>
        </div>
        <div className="content-part">
          {filterContent(subtitles, 'mainSubtitle').map((content, index) => (
            <React.Fragment key={index}>
              <div className="subtitle">{content.mainSubtitle}</div>
              <div className="secondary-subtitle">{content.secondarySubtitle}</div>
            </React.Fragment>
          ))}
        </div>
        {filterContent(banners, 'alt').slice(0, 1).map((item, index) => (
          <img src={item.src} alt={item.alt} className="img-fluid" key={index} />
        ))}
        {filterContent(contentSections, 'title').slice(0, 1).map((section, index) => (
          <ContentSection
            key={index}
            title={section.title}
            subtitle={section.subtitle}
            moreText={section.moreText}
            date={section.date}
            category={section.category}
          />
        ))}
        <VideoBlog />
        {filterContent(banners, 'alt').slice(1, 2).map((item, index) => (
          <img src={item.src} alt={item.alt} className="img-fluid" key={index} />
        ))}
        {filterContent(contentSections, 'title').slice(1, 2).map((section, index) => (
          <ContentSection
            key={index}
            title={section.title}
            subtitle={section.subtitle}
            moreText={section.moreText}
            date={section.date}
            category={section.category}
          />
        ))}
      </section>
    </div>
  );
};

export default HomePage;

