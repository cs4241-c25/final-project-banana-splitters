/*

import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission
        if (!username || !password) {
            alert('Please enter both a username and password!');
            return;
        }
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            if (response.ok) {
                localStorage.setItem('username', username);
                window.location.href = '/';
            } else {
                alert('Login failed. Please try again.');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed. Please try again.');
        }
    };
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-gray-300 p-8 rounded-lg shadow-lg max-w-sm w-full">
                <header className="text-center mb-6 text-white py-3 rounded-t-lg">
                    <h1 className="text-4xl font-semibold">Login</h1>
                </header>
                <main>
                    <section className="form-section">
                        <form id="login-form" onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-sm font-bold mb-2">Username:</label>
                                <input type="text" id="username" name="username" className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block text-sm font-bold mb-2">Password:</label>
                                <input type="password" id="password" name="password" className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                            </div>
                            <button type="submit" className="w-full py-2 bg-red-700 text-white font-bold rounded-md hover:bg-red-800 transition-colors">Login</button>
                        </form>
                    </section>
                </main>
            </div>
        </div>
    );
};
export default Login;

 */
// Made it just a button click for now
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div>
            <h1>Welcome to the Mental Health and Wellness Hub</h1>
            <button onClick={() => loginWithRedirect({redirect_uri: "http://localhost:5173"})}>
                Login with Auth0
            </button>
        </div>
    );
};

export default Login;