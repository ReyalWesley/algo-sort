import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Root from './routes/root';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>aaaaaaaaaaaaaaaaaa</div>} />
      </Routes>
    </Router>
  );
}

export default App;
