import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EnjoiMeteor from '../pages/EnjoiMeteor';

const App = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <Routes>
        <Route exact path="/" element={<EnjoiMeteor />} />
      </Routes>
    </div>
  </Router>
);

export default App;
