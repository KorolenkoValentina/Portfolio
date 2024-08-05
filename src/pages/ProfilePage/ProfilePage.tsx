
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Header from '../../components/Header/Header';
import './profilePage.scss';
import DefaultAvatar from '../../assets/images/profile-avatar.png'

const ProfilePage: React.FC = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    newPassword: '',
    confirmPassword: '',
    avatar: ''
  });
  const [avatarPreview, setAvatarPreview] = useState(DefaultAvatar);
  

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          
          if (ctx) {
            const MAX_WIDTH = 300;
            const MAX_HEIGHT = 300;
            let width = img.width;
            let height = img.height;

            if (width > height) {
              if (width > MAX_WIDTH) {
                height *= MAX_WIDTH / width;
                width = MAX_WIDTH;
              }
            } else {
              if (height > MAX_HEIGHT) {
                width *= MAX_HEIGHT / height;
                height = MAX_HEIGHT;
              }
            }

            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
            setAvatarPreview(canvas.toDataURL('image/png'));
          }
        };
        if (event.target) {
          img.src = event.target.result as string;
        }
      };
      reader.readAsDataURL(file);
      setFormData(prevData => ({
        ...prevData,
        avatar: file.name
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Your form submit logic here
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <Header/>
    <section className="profile">
      <h5>Профиль</h5>
      <div className="profile-content d-flex justify-content-between">
        <form className="profile-content__form col-md-7" onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter a name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <label htmlFor="name">Enter a name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleInputChange}
            />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="newPassword"
              placeholder="New password"
              value={formData.newPassword}
              onChange={handleInputChange}
            />
            <label htmlFor="newPassword">New password</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <label htmlFor="confirmPassword">Confirm password</label>
          </div>
          <button className="btn btn-wright" type="submit">Submit</button>
        </form>
        <div className="col-md-4">
          <img src={avatarPreview} alt="avatar" />
          <form>
            <div className="file-row">
              <input
                className="input-file"
                id="fileInput"
                name="fileInput"
                type="file"
                onChange={handleFileChange}
              />
              <div className="file-row__text">choose an avatar</div>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};

export default ProfilePage;
