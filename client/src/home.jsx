import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NavigationBar from './components/navigationBar.jsx';

const Home = () => {
    const {logout} = useAuth0();

    return (
        <>
            <NavigationBar />
            <div style={{
                padding: '2rem',
                backgroundColor: '#F5F5F5',
                minHeight: '100vh',
                paddingTop: '60vh'
            }}>


                {/* Heading */}
                <h1 style={{
                    color: '#AC2B37',
                    textAlign: 'center',
                    fontSize: '50px',
                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                    margin: 0
                }}>
                    Welcome to the Mental Health & Wellness Hub!
                </h1>

                <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    zIndex: 1000
                }}>
                    <button onClick={() => logout({returnTo: window.location.origin})}
                            className="logout-btn">
                        Logout
                    </button>
                </div>

                <div style={{
                    display: 'flex',
                    width: '100vw',
                    minHeight: '100vh',
                    marginTop: '30px'
                }}>

                    {/* Left Side */}
                    <div style={{
                        width: '50vw',
                        backgroundColor: '#F5F5F5',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        paddingTop: '1rem',
                        paddingLeft: '1rem'
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2rem'
                        }}>
                            <div>
                                <h2 style={{
                                    color: '#AC2B37',
                                    fontSize: '30px',
                                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
                                }}>
                                    Our Goal
                                </h2>
                                <p style={{
                                    color: '#4F1217',
                                    fontSize: '20px',
                                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
                                }}>
                                    The goal of the WPI Mental Heath & Wellness Hub is to provide various Mental Health
                                    tools, resources, and support for the WPI community.
                                </p>
                            </div>

                            <div>
                                <h2 style={{
                                    color: '#AC2B37',
                                    fontSize: '30px',
                                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
                                }}>
                                    Explore the Hub!
                                </h2>
                                <p style={{
                                    color: '#4F1217',
                                    fontSize: '20px',
                                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
                                }}>
                                    We offer various tools and resources to support your mental health and well-being.
                                    Here are some areas you can explore:
                                </p>
                                <ul style={{
                                    color: '#4F1217',
                                    fontSize: '18px',
                                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                                    paddingLeft: '20px',
                                    listStyleType: 'disc'
                                }}>
                                    <li><strong>Self-Care:</strong> Learn tips and strategies to add self-care into your
                                        daily routine
                                    </li>
                                    <li><strong>Care Reports:</strong> Submit a care report form if you feel concerned
                                        about a community member
                                    </li>
                                    <li><strong>Resources:</strong> Find more mental health and wellness resources
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div style={{
                        width: '50vw',
                        backgroundColor: '#F5F5F5',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        paddingTop: '1rem'
                    }}>
                        <div style={{
                            width: '42vw',
                            height: '42vw',
                            backgroundColor: '#D9D9D9',
                            display: 'flex',
                            flexDirection: 'column',
                            padding: 0,
                        }}>
                            <h2 style={{
                                color: '#F5F5F5',
                                backgroundColor: '#34383B',
                                fontSize: '30px',
                                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                                width: '100%',
                                height: '15%',
                                margin: 0,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                Resources
                            </h2>

                            <div style={{display: 'flex'}}>
                                <ul style={{
                                    color: '#34383B',
                                    fontSize: '28px',
                                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                                    textAlign: 'left',
                                    lineHeight: '2',
                                    paddingLeft: "30px",
                                    listStyleType: 'disc'
                                }}>
                                    <li>
                                        <a
                                            href="https://www.wpi.edu/offices/student-development-counseling-center"
                                            target="_blank"
                                            style={{color: '#34383B', textDecoration: 'none'}}
                                        >
                                            Student Development & Counseling Center
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.wpi.edu/offices/student-development-counseling-center/our-services/group-counseling"
                                            target="_blank"
                                            style={{color: '#34383B', textDecoration: 'none'}}
                                        >
                                            Group Counseling
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.wpi.edu/offices/center-well-being"
                                            target="_blank"
                                            style={{color: '#34383B', textDecoration: 'none'}}
                                        >
                                            Center For Well-Being
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.wpi.edu/offices/student-development-counseling-center/peer-support"
                                            target="_blank"
                                            style={{color: '#34383B', textDecoration: 'none'}}
                                        >
                                            Student Support Network
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.wpi.edu/offices/health-services"
                                            target="_blank"
                                            style={{color: '#34383B', textDecoration: 'none'}}
                                        >
                                            Health Services
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Home
