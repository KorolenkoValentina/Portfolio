
import React from 'react';
import Header from '../../components/Header/Header';
import './advertisementPage.scss'; 
import myWorkImage1 from '../../assets/images/my-work.jpg';
import myWorkImage2 from '../../assets/images/my-work-2.jpg';

interface WorkItem {
  imageSrc: string;
  altText: string;
  title: string;
  subtitle: string;
  tags: string[];
  linkText: string;
}

const workItems: WorkItem[] = [
  {
    imageSrc: myWorkImage1,
    altText: 'my-work',
    title: 'altermono.com',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
    tags: ['design', 'website development', 'SMM'],
    linkText: 'Go to site'
  },
  {
    imageSrc: myWorkImage2,
    altText: 'my-work',
    title: 'codedoco.com',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas.',
    tags: ['design', 'website development', 'SMM'],
    linkText: 'Go to site'
  }
];

const AdvertisementPage: React.FC = () => {
  return (
    <>
    <Header/>
    <section className="my-work">
      <h5>Мои работы</h5>
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
