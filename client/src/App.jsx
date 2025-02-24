import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Admin from './admin'
import Login from './Login'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/admin" element={<Admin />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}

export default App;
