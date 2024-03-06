import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IslandSnow from '../pages/IslandSnow';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
const App = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <Routes>
        <Route exact path="/" element={<IslandSnow />} />
      </Routes>
    </div>
  </Router>
);

export default App;
