import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Contact from './pages/Contact';
// import LandingPage from './pages/LandingPage'; // Pastikan nama dan jalur ini benar

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;