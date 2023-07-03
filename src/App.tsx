import { Algos } from './component/algo';
import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route element={<div>Container <Outlet /></div>}>
        <Route path="/" element={<Algos />} />
        <Route path="/about" element={<div>about</div>} />
      </Route>
    </Routes>
  );
}

export default App;
