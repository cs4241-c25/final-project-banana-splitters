import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Auth0Provider } from "@auth0/auth0-react";
import App from './App';

const domain = "dev-xf1gnvayvu76e2me.us.auth0.com";
const clientId = "fGIjW4jWBEmttKpLr7HFiNbDRHCP3suZ";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{ redirect_uri: "http://localhost:5173" }}
    >
        <App />
    </Auth0Provider>
);
