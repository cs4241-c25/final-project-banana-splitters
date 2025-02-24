/*
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css'
import SelfCare from './selfCare.jsx';

function App() {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    return (
        <div>
            {!isAuthenticated ? (
                <button onClick={() => loginWithRedirect()}>Log In</button>
            ) : (
                <>
                    <h1>Welcome, {user.name}</h1>
                    <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
                </>
            )}
        </div>
    );
}

export default App;

 */

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import SelfCare from "./selfCare";
import Login from "./Login";
import Admin from "./Admin";
import Home from "./home.jsx";

const App = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/Login' element={<Login />} />
                <Route path="/selfCare" element={<SelfCare />} />
                <Route
                    path="/admin" element={isAuthenticated ? <Admin /> : <Navigate to="/login" />}
                />
            </Routes>
        </Router>
    );
};

export default App;
