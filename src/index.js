import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import smoothScrollPolyfill from 'smoothscroll-polyfill';
import App  from './App';
import './index.css'; // Import the CSS file

smoothScrollPolyfill.polyfill();
// Add global font family
document.body.style.fontFamily = "Inter";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);