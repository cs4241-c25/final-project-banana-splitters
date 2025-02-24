import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

function Admin() {
    const { getAccessTokenSilently, user, isAuthenticated } = useAuth0();
    const [adminData, setAdminData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // If user is not authenticated, redirect to login page
        if (!isAuthenticated) {
            navigate('/login'); // Redirecting to login page if not authenticated
        } else {
            // If authenticated, fetch admin data
            const fetchAdminData = async () => {
                try {
                    // Get the access token
                    const token = await getAccessTokenSilently();
                    // Make a request to the protected /admin route
                    const response = await fetch('/admin', {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${token}`, // Sending the JWT token in Authorization header
                        },
                    });

                    if (response.ok) {
                        const data = await response.text();
                        setAdminData(data); // Set the fetched data to state
                    } else {
                        setAdminData('Access denied or forbidden'); // In case of access issues
                    }
                } catch (err) {
                    console.error('Error fetching admin data:', err);
                    setAdminData('Error fetching data'); // Handle error fetching data
                }
            };

            // Check if the user is authenticated and has the required role
            if (user && user.roles && user.roles.includes('admin')) {
                fetchAdminData();
            } else {
                setAdminData('You are not authorized to view this page'); // Not an admin, show message
            }
        }
    }, [isAuthenticated, user, getAccessTokenSilently, navigate]);

    if (!isAuthenticated) {
        return <p>Redirecting to login...</p>; // Show a loading message if not authenticated yet
    }

    return (
        <div>
            <h2>Admin Page</h2>
            <p>{adminData || 'Loading admin data...'}</p>
        </div>
    );
}

export default Admin;
