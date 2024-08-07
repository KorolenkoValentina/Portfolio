import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './aboutMePage.scss'
import { albumData } from '../../data/albumData ';



const AlbumPage: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const { albumId } = useParams<{ albumId: string }>();
    const navigate = useNavigate();

    const album = albumData[albumId || ''];

    if (!album) {
      return <div>Album not found</div>;
    }
  
    const handleImageClick = (image: string) => {
        setSelectedImage(image);
        setShowModal(true);
    };
    
    const handleClose = () => {
        setShowModal(false);
        setSelectedImage(null);
    };

      

    return (
      <div className="album-page">
        <button className="btn btn-primary" onClick={() => navigate('/about')}>Back</button>
        <h3>{album.title}</h3>
        <p>{album.date}</p>
        <div className="album-images">
        {album.images.map((image: string, index: number) => (
          <img
            src={image}
            alt={`album-${index}`}
            key={index}
            className="img-fluid"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content">
            <div className="modal-body">
              {selectedImage && <img src={selectedImage} alt="Selected" className="img-fluid" />}
            </div>
          </div>
        </div>
      )}
      </div>
    );
};
export default AlbumPage;