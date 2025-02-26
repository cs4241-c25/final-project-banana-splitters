import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import SelfCare from "./selfCare";
import Login from "./Login";
import Admin from "./admin";
import Home from "./home.jsx";
import CareReport from "./care-report.jsx";

const App = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/Login' element={<Login />} />
                <Route path="/selfCare" element={<SelfCare />} />
                <Route path="/care-report" element={<CareReport />} />
                <Route
                    path="/admin" element={isAuthenticated ? <Admin /> : <Navigate to="/login" />}
                />
            </Routes>
        </Router>
    );
};

export default App;
