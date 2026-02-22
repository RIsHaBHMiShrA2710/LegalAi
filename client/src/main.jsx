import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './components/context/AuthContext.jsx';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </React.StrictMode>,
);
