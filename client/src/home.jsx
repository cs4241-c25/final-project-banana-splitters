import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
    const { logout } = useAuth0();

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => logout({ returnTo: window.location.origin })}>
                Logout
            </button>
        </div>
    );
};

export default Home;
