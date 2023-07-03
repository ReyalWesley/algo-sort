import { Container } from './component/layout/container';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './routes/about';
import { Algos } from './routes/algos';
import { Home } from './routes/home';

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
