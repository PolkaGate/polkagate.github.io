import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route render={() => <Navigate to="/" />} />
    </Routes>
  );
};