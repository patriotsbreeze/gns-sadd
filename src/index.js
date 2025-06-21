import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BoardPage from './pages/BoardPage';
import JoinPage from './pages/JoinPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="board" element={<BoardPage />} />
          <Route path="join" element={<JoinPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
