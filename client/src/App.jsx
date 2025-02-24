import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Admin from './admin'; // Import the Admin page
import Login from './Login'; // Import the Login page
import { useNavigate } from 'react-router-dom';

function App() {
    const domain = 'dev-xf1gnvayvu76e2me.us.auth0.com';  // Replace with your Auth0 domain
    const clientId = 'fGIjW4jWBEmttKpLr7HFiNbDRHCP3suZ';  // Replace with your Auth0 client ID

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}
        >
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </Auth0Provider>
    );
}

export default App;
