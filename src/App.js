import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Shirts from './components/Shirts';
import Shorts from './components/Shorts';
import Hats from './components/Hats';
import NotFound from './components/NotFound'; // If you have a NotFound component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shirts" element={<Shirts />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/hats" element={<Hats />} />
          <Route path="/*" element={<NotFound />} /> {/* Optional: Render NotFound for undefined routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
