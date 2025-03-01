import wpiCrest from '../assets/wpiCrest2.png';
import {Link} from "react-router-dom";
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
                flexDirection: 'column'
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
                        fontSize: '32px',
                        fontWeight: 'bold',
                        color: '#F5F5F5',
                        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                    }}>
                        WPI Mental Health and Wellness Hub
                    </h1>
                </div>
                <div className="footer-note">
                    This is not a WPI website, this is a student project.
                </div>

                <nav style={{marginTop: 'auto'}}>
                    <div style={{
                        display: 'flex',
                        width: '100%',
                        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                        justifyContent: 'space-evenly',
                    }}>
                        <Link to="/" style={{ color: '#F5F5F5', textDecoration: 'underline' }}>Home</Link>
                        <Link to="/selfcare" style={{ color: '#F5F5F5', textDecoration: 'underline' }}>Self Care</Link>
                        <Link to="/affirmations" style={{ color: '#F5F5F5', textDecoration: 'underline' }}>Affirmations Board</Link>
                        <Link to="/care-report" style={{ color: '#F5F5F5', textDecoration: 'underline' }}>Care Report Form</Link>
                        <Link to="/admin" style={{ color: '#F5F5F5', textDecoration: 'underline' }}>Admin</Link> </div>
                </nav>
            </header>


        </>
    );
};

export default NavigationBar;