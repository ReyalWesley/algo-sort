import { Container } from './component/layout/container';
import { Algos } from './component/algo';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route element={<Container />}>
        <Route path="/" element={<Algos />} />
        <Route path="/about" element={<div>about</div>} />
      </Route>
    </Routes>
  );
}

export default App;
