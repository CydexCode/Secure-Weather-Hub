import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-zlk5ifjsubdt1rz0.us.auth0.com"  // Replace with your Auth0 domain
      clientId="wM16fLjM7fBehELUvJp9L0Cg8ktVnCRQ"  // Replace with your Auth0 client ID
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
