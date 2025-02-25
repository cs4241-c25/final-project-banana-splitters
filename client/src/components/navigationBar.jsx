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
                boxShadow: '0 5px 4px rgba(0, 0, 0, 0.1)',
                zIndex: 1000
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                }}>
                    <img
                        src= {wpiCrest}
                        alt="WPI Logo"
                        style={{width: '50px', height: '50px'}}
                    />

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
                        marginTop: "10px"
                    }}>
                        <a href="/" style={{color: '#F5F5F5'}}>Home</a>
                        <a href="/selfcare" style={{color: '#F5F5F5'}}>Self Care</a>
                        <p style={{color: '#F5F5F5'}}>Care Report Form</p>
                        <a href="/admin" style={{color: '#F5F5F5'}}>Admin</a>
                    </div>
                </nav>
            </header>


        </>
    );
};

export default NavigationBar;