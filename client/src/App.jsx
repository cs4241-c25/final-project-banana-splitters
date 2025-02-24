import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Admin from './admin'
import Login from './Login'
import Home from './Home'  // Add this import for the Home component


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}

export default App;
