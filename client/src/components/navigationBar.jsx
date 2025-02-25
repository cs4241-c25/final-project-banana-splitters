import wpiCrest from '../assets/wpiCrest2.png';
const NavigationBar = () => {
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
                        src= {wpiCrest}
                        alt="WPI Logo"
                        style={{width: '50px', height: '50px'}}
                    />

                    {/* Heading on the Right */}
                    <h1 style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                    }}>
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
                        <p style={{color: '#F5F5F5'}}>Care Report Form</p>
                        <p style={{color: '#F5F5F5'}}>Admin</p>
                    </div>
                </nav>
            </header>


        </>
    );
};

export default NavigationBar;