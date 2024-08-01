import React, { useState, FormEvent, ChangeEvent } from 'react';
import BanerVideo from '../../../assets/images/baner-video.jpg'
import './components.scss'; 

interface Comment {
  name: string;
  description: string;
}

const VideoBlog: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [comment, setComment] = useState<Comment>({ name: '', description: '' });
  const [comments, setComments] = useState<Comment[]>([]);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setComment((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setComments([...comments, comment]);
    setComment({ name: '', description: '' });
    setIsFormOpen(false);
  };

  return (
    <div className="content-part" id="video-blog">
      <a className="lightbox" href="https://www.youtube.com/watch?v=gfdzl8ZC-ck" target="_blank" rel="noopener noreferrer">
        <img src={BanerVideo} alt="Video" className="screen" />
      </a>
      <div className="title mt-4">Bought a new laptop for 150,000</div>
      <div className="content-box d-flex justify-content-between">
        <div className="content-box__subtitle d-flex">
          <div className="secondary-subtitle">21.06.2020</div>
          <div className="circle"></div>
          <div className="secondary-subtitle"> video promotion</div>
        </div>
        
        <div id="app">
          <button
            className="btn btn-outline-primary form-button mb-4"
            onClick={toggleForm}
          >
            leave a comment
          </button>
          {isFormOpen && (
            <form className="animated fadeIn" onSubmit={submitForm}>
              <div className="mb-3">
                <label htmlFor="name">User Name</label>
                <input
                  className="form-control"
                  type="text"
                  required
                  name="name"
                  value={comment.name}
                  onChange={handleInputChange}
                  id="name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description">Commentary:</label>
                <textarea
                  className="form-control"
                  id="description"
                  rows={4}
                  name="description"
                  value={comment.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-5 d-flex justify-content-end">
                <button className="btn btn-success" type="submit">Post a comment</button>
              </div>
            </form>
          )}
          
        </div>
        
      </div>
      <div className="ml-3">
          comments <span className="badge badge-secondary">{comments.length}</span>
          </div>
          {comments.map((c, index) => (
            <div id="comment" key={index}>
              <div>
                <strong>{c.name}</strong>
                <p>{c.description}</p>
              </div>
            </div>
          ))}
    </div>
  );
};

export default VideoBlog;