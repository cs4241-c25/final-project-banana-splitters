import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NavigationBar from './components/navigationBar.jsx';

const Admin = () => {
    const { user, logout, isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
        return <div>You are not authenticated. Please log in to access the admin page.</div>;
    }

    return (
        <>
        <NavigationBar />
        <div style={{ padding: "2rem" }}>
            <h1>Admin Page</h1>
            <p>Welcome, {user?.name}! This is the admin page.</p>
            <button onClick={() => logout({ returnTo: window.location.origin })}>
                Logout
            </button>
        </div>
        </>
    );
};

export default Admin;
