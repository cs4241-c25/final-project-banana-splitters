import React, { useState, useEffect} from "react"; // adding the useEffect to disp form data
import { useAuth0 } from "@auth0/auth0-react";
import NavigationBar from './components/navigationBar.jsx';
import "./index.css";


const Admin = () => {
    const { user, logout, isAuthenticated } = useAuth0();
    const [reports, setReports] = useState([]); // state saved to store reports on page

    // fetch reports from server, store in state
    const fetchReports = async () => {
        try {
            const response = await fetch("http://localhost:3000/results"); // report route from server
            if (!response.ok) throw new Error("Failed to fetch reports");

            const data = await response.json();
            setReports(data); // store in react state
        } catch (error) {
            console.error("Error fetching reports:", error);
        }
    };

    useEffect(() => { // runs once when component loads
        fetchReports();
    }, []);

    if (!isAuthenticated) {
        return <div>You are not authenticated. Please log in to access the admin page.</div>;
    }

    return (
        <>
            <NavigationBar/>
            <div id='root' className="admin-container">

                <h1>Admin</h1>
                <p className="welcome-message">Welcome, {user?.name}! This is the admin page.</p>

                <hr/>


                <h2 className="admin-title">Care Reports Dashboard:</h2>
                <div className="table-container">
                    <table>
                        <thead>
                        <tr>
                            <th>Reporter Name</th>
                            <th>Student Name</th>
                            <th>Residence</th>
                            <th>Concerns</th>
                        </tr>
                        </thead>
                        <tbody id="reportTableBody">
                            {reports.map((report, index) => (
                                <tr key={index}>
                                    <td>{report.rName || "Anonymous"}</td>
                                    <td>{report.sName}</td>
                                    <td>{report.residence}</td>
                                    <td>{report.concerns}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
};

export default Admin;
