import { Container } from './component/layout';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { About, Home, Algos } from './routes';

function App() {
  return (
    <Routes>
      <Route element={<Container />}>
        <Route path="/" element={<Home />} />
        <Route path="/algos" element={<Algos />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
