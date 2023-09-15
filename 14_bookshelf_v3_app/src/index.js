import './index.css';
import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import { Provider } from './context/books';

const root = ReactDom.createRoot(
    document.getElementById('root')
);

root.render(
    <React.StrictMode>
        <Provider>
            <App />
        </Provider>
    </React.StrictMode>
);