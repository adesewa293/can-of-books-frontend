import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <h2>Hello, from Index</h2>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);


