import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import ContentViewingPage from './pages/ContentViewingPage';
import UserDashboard from './pages/UserDashboard';
import CreateContentPage from './pages/CreateContentPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/content" element={<ContentViewingPage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/create" element={<CreateContentPage />} />
      </Routes>
    </Router>
  );
};

export default App;
