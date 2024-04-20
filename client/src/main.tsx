import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Adjust the import path according to your file structure

const container = document.getElementById('root');
const root = createRoot(container!); // Adjusted to assert that container is non-null
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);