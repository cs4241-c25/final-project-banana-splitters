import wpiCrest from '../assets/wpiCrest2.png';
const NavigationBar = () => {
    return (
        <>
            <header style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '20%',
                backgroundColor: '#AC2B37',
                color: '#F5F5F5',
                padding: '1rem',
                boxShadow: '0 5px 4px rgba(0, 0, 0, 0.1)',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    flex: 1,
                }}>
                    <img
                        src={wpiCrest}
                        alt="WPI Logo"
                        style={{width: '50px', height: '50px'}}
                    />
                    <h1 style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                        color: '#F5F5F5',
                    }}>
                        WPI Mental Health and Wellness Hub
                    </h1>
                </div>

                <nav style={{marginTop: 'auto'}}>
                    <div style={{
                        display: 'flex',
                        width: '100%',
                        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                        justifyContent: 'space-evenly',
                    }}>
                        <a href="/" style={{color: '#F5F5F5', textDecoration: 'underline'}}>Home</a>
                        <a href="/selfcare" style={{color: '#F5F5F5', textDecoration: 'underline'}}>Self Care</a>
                        <a href="/care-report" style={{color: '#F5F5F5', textDecoration: 'underline'}}>Care Report Form</a>
                        <a href="/admin" style={{color: '#F5F5F5', textDecoration: 'underline'}}>Admin</a>
                    </div>
                </nav>
            </header>


        </>
    );
};

export default NavigationBar;