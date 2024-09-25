import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import for Provider
import store from './store/store.js'; // Import for Redux store
import App from './App.jsx';
import './index.css'; // Import Tailwind CSS

const root = createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
);

