import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage/HomePage';
import MainLayout from './components/MainLayout/MainLayout';
import './App.scss'

const App: React.FC = () => {
return (
<div className="main-container">
  <Router>
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage/>} />

      </Routes>
    </MainLayout>
  </Router>
  </div>
);
};

export default App;