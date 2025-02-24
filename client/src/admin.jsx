import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Admin = () => {
    const { user, logout } = useAuth0();

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Admin Page</h1>
            <p>Welcome, {user?.name}! This is the admin page.</p>
            <button onClick={() => logout({ returnTo: window.location.origin })}>
                Logout
            </button>
        </div>
    );
};

export default Admin;
