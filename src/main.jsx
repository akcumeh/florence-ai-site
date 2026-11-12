import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource-variable/bricolage-grotesque/opsz.css';
import '@fontsource/figtree/400.css';
import '@fontsource/figtree/500.css';
import '@fontsource/figtree/600.css';
import '@fontsource/figtree/700.css';
import '@fontsource/geist-mono/500.css';
import '@fontsource/caveat/700.css';
import './styles/main.scss';
import App from './App.jsx';

const container = document.getElementById('root');

const app = (
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

if (container.hasChildNodes() && window.location.pathname === '/') {
    ReactDOM.hydrateRoot(container, app);
} else {
    container.textContent = '';
    ReactDOM.createRoot(container).render(app);
}
