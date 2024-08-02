import React from 'react';
import './articlePage.scss';
import Header from '../../components/Header/Header';

import ArticleBaner from '../../assets/images/article-baner.jpg'



interface ReadingItemProps {
    title: string;
    date: string;
    link: string;
}
const ArticleReading: React.FC = () => {
    return (
      <div className="article-reading">
        <div className="title">Интересно почитать</div>
        <div className="row">
          <ReadingItem title="How I went to FrontEnd Conf 2021." date="21.06.2020" link="#conference" />
          <ReadingItem title="How to write code quickly and ..." date="21.06.2020" link="#conference" />
          <ReadingItem title="Bought a new laptop for 150,000 " date="21.06.2020" link="#video-blog" />
          <ReadingItem title="How to write code quickly and painlessly?" date="21.06.2020" link="#writing" />
        </div>
        <DiscussionForm />
      </div>
    );
  };
  
  
  const ReadingItem: React.FC<ReadingItemProps> = ({ title, date, link }) => {
    return (
      <div className="col-md-6">
        <a className="subtitle scrollto" href={link}>
          {title}
        </a>
        <div className="secondary-subtitle">{date}</div>
      </div>
    );
  };
  
  const DiscussionForm: React.FC = () => {
    return (
      <>
        <div className="title">Discussion</div>
        <div className="form-floating">
          <input type="text" className="form-control discussion-form" id="floatingInput" placeholder="name" />
          <label htmlFor="floatingInput">Comment text</label>
        </div>
        <button className="btn btn-wright" type="submit">
        Send
        </button>
      </>
    );
  };

const ArticlePage: React.FC = () => {
  return (
    <>
    <Header/>
    <section className="article">
      <div className="article__item">
        <div className="title">How to create websites easily</div>
        <div className="content-box__subtitle d-flex">
          <div className="secondary-subtitle">21.06.2020</div>
          <div className="circle"></div>
          <div className="secondary-subtitle">website creation</div>
        </div>
        <div className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum,
          posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales
          lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia
          sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam
          id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
        </div>
        <div className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum,
          posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales
          lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
        </div>
        <img src={ArticleBaner} alt="article-baner" className="img-fluid mb-4" />
        <div className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum,
          posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales
          lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia
          sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam
          id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
        </div>
        <ArticleReading />
      </div>
    </section>
    </>
  );
};




export default ArticlePage;
