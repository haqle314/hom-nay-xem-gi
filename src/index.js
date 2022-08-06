import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Listing, LocalDatabase } from './services';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App listingService={new Listing(LocalDatabase)} />
    </React.StrictMode>
);
