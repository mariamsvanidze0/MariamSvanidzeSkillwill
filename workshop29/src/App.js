import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import './App.scss';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRoute isAuthenticated={isAuthenticated} component={HomePage} />} />
      </Routes>
    </Router>
  );
}

export default App;
