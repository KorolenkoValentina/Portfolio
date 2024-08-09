
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Header from '../../components/Header/Header';
import './profilePage.scss';
import DefaultAvatar from '../../assets/images/profile-avatar.png'


interface FormData {
  name: string;
  email: string;
  newPassword: string;
  confirmPassword: string;
  avatar: string;
}

const ProfilePage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    newPassword: '',
    confirmPassword: '',
    avatar: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [avatarPreview, setAvatarPreview] = useState(DefaultAvatar);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Za-z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const validateConfirmPassword = () => {
    return formData.newPassword && formData.confirmPassword && formData.newPassword === formData.confirmPassword;
  };

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

    const newErrors = {
      name: formData.name ? '' : 'Name is required',
      email: validateEmail(formData.email) ? '' : 'Please enter a valid email address',
      newPassword: validatePassword(formData.newPassword) ? '' : 'Password must be at least 8 characters long and contain at least one letter',
      confirmPassword: validateConfirmPassword() ? '' : 'Passwords do not match'
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(error => error !== '');
    if (!hasErrors) {
      console.log('Form submitted:', formData);
      setFormData({
        name: '',
        email: '',
        newPassword: '',
        confirmPassword: '',
        avatar: ''
      });
      setAvatarPreview(DefaultAvatar);
    }
  };
 


  return (
    <>
    <Header />
    <section className="profile">
      <h5>Profile</h5>
      <div className="profile-content d-flex justify-content-between">
        <form className="profile-content__form col-md-7" onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              id="name"
              placeholder="Enter a name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <label htmlFor="name">Enter a name</label>
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleInputChange}
            />
            <label htmlFor="email">Email address</label>
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className={`form-control ${errors.newPassword ? 'is-invalid' : ''}`}
              id="newPassword"
              placeholder="New password"
              value={formData.newPassword}
              onChange={handleInputChange}
            />
            <label htmlFor="newPassword">New password</label>
            {errors.newPassword && <div className="invalid-feedback">{errors.newPassword}</div>}
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
              id="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <label htmlFor="confirmPassword">Confirm password</label>
            {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
          </div>
          <button className="btn btn-wright" type="submit" onClick={handleSubmit}>Submit</button>
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
                data-testid="fileInput"
              />
              <div className="file-row__text" >choose an avatar</div>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};

export default ProfilePage;
