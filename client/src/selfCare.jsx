import React from "react";

const SelfCare = () => {
    return (
        <>
            <header style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                backgroundColor: '#AC2B37',
                color: '#F5F5F5',
                padding: '1rem',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                zIndex: 1000
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center', // Aligns items vertically
                    justifyContent: 'center', // Centers the content horizontally
                    gap: '1rem', // Adds space between the image and the heading
                }}>
                    <img
                        src='./assets/wpiCrest2.png'
                        alt="WPI Logo"
                        style={{width: '50px', height: '50px'}}
                    />

                    {/* Heading on the Right */}
                    <h1 style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                    }} >
                        WPI Mental Health and Wellness Hub
                    </h1>
                </div>


                <nav>

                    <div style={{
                        display: 'flex',
                        width: '100%', // Ensure it spans the whole screen
                        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                        justifyContent: 'space-evenly',
                    }}>
                        <p style={{color: '#F5F5F5'}}>Home</p>
                        <p style={{color: '#F5F5F5'}}>Self Care</p>
                        <p style={{color: '#F5F5F5'}}>Resources</p>
                        <p style={{color: '#F5F5F5'}}>Care Report Form</p>
                        <p style={{color: '#F5F5F5'}}>Admin</p>
                    </div>
                </nav>
            </header>

            <div style={{padding:'2rem', backgroundColor: '#F5F5F5', minHeight: '100vh'}}>
                {/* Heading */}
                <h1 style={{
                    color: '#AC2B37',
                    textAlign: 'center',
                    fontSize: '50px',
                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                    marginTop: '120px'
                }}>
                    Self-Care
                </h1>

                {/* Main Content */}
                <div style={{display: 'flex', width: '100vw', minHeight: '100vh'}}>

                    {/* Left Side */}
                    <div style={{
                        width: '50vw',
                        backgroundColor: '#F5F5F5',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start', // Align to the top
                        paddingTop: '1rem' // Reduce padding at the top
                    }}>

                        {/* Stack Content Vertically */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                            {/* First Block */}
                            <div>
                                <h2 style={{
                                    color: '#AC2B37',
                                    fontSize: '30px',
                                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
                                }}>
                                    What is Self Care?
                                </h2>
                                <p style={{
                                    color: '#4F1217',
                                    fontSize: '20px',
                                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
                                }}>
                                    Self Care is defined as the practice of taking an active role in
                                    protecting one's own well-being and happiness, in particular during
                                    periods of stress.
                                </p>
                            </div>

                            {/* Second Block */}
                            <div>
                                <h2 style={{
                                    color: '#AC2B37',
                                    fontSize: '30px',
                                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
                                }}>
                                    Why is Self Care Important?
                                </h2>
                                <p style={{
                                    color: '#4F1217',
                                    fontSize: '20px',
                                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
                                }}>
                                    Self-care is important because it helps maintain both physical and mental health by
                                    managing stress, increasing energy levels, boosting self-esteem, and allowing you to better
                                    handle life's challenges. Taking care of yourself allows you to be the best version of
                                    yourself for others as well.
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Right Side */}
                    <div style={{
                        width: '50vw',
                        backgroundColor: '#F5F5F5',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start', // Align to the top
                        paddingTop: '1rem' // Reduce padding at the top
                    }}>
                        <div style={{
                            width: '42vw',
                            height: '42vw',
                            backgroundColor: '#D9D9D9',
                            display: 'flex',
                            flexDirection: 'column', // Stack content vertically
                            padding: 0, // Ensure no extra padding
                        }}>
                            {/* Right side content goes here */}
                            <h2 style={{
                                color: '#F5F5F5',
                                backgroundColor: '#34383B',
                                fontSize: '30px',
                                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                                width: '100%', // Ensure it spans the entire width of the parent
                                height: '15%',
                                margin: 0,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                Self-Care Ideas
                            </h2>

                            <div className = "display: flex, align-items-left">
                                <ul style={{
                                    color: '#34383B',
                                    fontSize: '28px',
                                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                                    textAlign: 'left',
                                    lineHeight: '2'
                                }}>
                                    <li>Read a favorite book</li>
                                    <li>Practice meditation</li>
                                    <li>Go for a walk</li>
                                    <li>Listen to music</li>
                                    <li>Journal your thoughts</li>
                                    <li>Take a relaxing bath</li>
                                    <li>Enjoy a cup of tea</li>
                                </ul>

                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </>
    );
};


export default SelfCare;