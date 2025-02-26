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


import NavigationBar from './components/navigationBar.jsx'
import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

const Login = () => {
    const { loginWithRedirect } = useAuth0()

    return (
    <div>
        <NavigationBar />

        <div className="flex justify-center items-center h-screen w-screen bg-[#F5F5F5]">
            <div className="bg-[#CECFD0] p-6 rounded-lg shadow-lg w-96 text-center border border-blue-200">
                <header className="bg-[#34383B] text-white py-6 rounded-t-lg">
                    <h1 className="text-3xl font-bold">Login</h1>
                </header>
                <div className="mt-6">
                    <p className="text-lg  mb-4" style={{ color: "#AC2B37" }}>
                        Must login to access the admin page
                    </p>
                    <button
                        onClick={() => loginWithRedirect({ appState: { returnTo: "/admin" } })}
                        className="w-full py-3 bg-red-700 text-white font-bold rounded-md hover:bg-red-800 transition-colors"
                    >
                        Log in with Auth0
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login