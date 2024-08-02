import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage/HomePage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import AdvertisementPage from './pages/AdvertisementPage/AdvertisementPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import MainLayout from './components/MainLayout/MainLayout';
import './App.scss'

const App: React.FC = () => {
return (
<div className="main-container">
  <Router>
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/articles"  element={<ArticlePage/>}/>
        <Route path="/advertisement"  element={<AdvertisementPage/>}/>
        <Route path="/profile"  element={<ProfilePage/>}/>
      </Routes>
    </MainLayout>
  </Router>
  </div>
);
};

export default App;