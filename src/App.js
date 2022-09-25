import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
// import { HashLinkPage } from './components/HashLinkPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route exact path="/page" component={HashLinkPage} /> */}
      <Route render={() => <Navigate to="/" />} />
    </Routes>
  );
};