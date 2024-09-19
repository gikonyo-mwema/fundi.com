import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import { CartProvider } from '.CartContext';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <CartProvider>
        <App />
    </CartProvider>
);
