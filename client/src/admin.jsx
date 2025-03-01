import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NavigationBar from './components/navigationBar.jsx';
import "./index.css";


const Admin = () => {
    const { user, logout, isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
        return <div>You are not authenticated. Please log in to access the admin page.</div>;
    }

    return (
        <>
            <NavigationBar/>
            <div id='root' className="admin-container">

                <h1>Admin</h1>
                <p className="welcome-message">Welcome, {user?.name}! This is the admin page.</p>


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
                        <tr>

                        </tr>

                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
};

export default Admin;
