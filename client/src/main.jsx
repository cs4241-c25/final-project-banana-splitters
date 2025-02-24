import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import App from './App';

const domain = "dev-xf1gnvayvu76e2me.us.auth0.com";
const clientId = "fGIjW4jWBEmttKpLr7HFiNbDRHCP3suZ";

// Create a root and render your app
const root = ReactDOM.createRoot(document.getElementById('root'));  // Use createRoot
root.render(
    <Auth0Provider
        domain={domain}
        clientId={clientId}
        // This link needs to be changed to the glitch link
        authorizationParams={{ redirect_uri: "http://localhost:5173" }}
    >
        <App />
    </Auth0Provider>
);

