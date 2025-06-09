import React, { useState } from "react";
import { Link } from "react-router-dom";
import './LandingPage.css';
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    return (
        <div className="landing-page">
            <div className="landing-navbar" style={{ justifyContent: 'flex-start' }}>
                <div className="dropdown" tabIndex={0}
                    onBlur={() => setDropdownOpen(false)}
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: 0 }}
                >
                    <Link to="/adminlogin" onClick={() => setDropdownOpen(false)} style={{ marginRight: 'auto' }}>Admin Login</Link>
                   <Link to="/login">Login</Link>
                </div>
                 
                <Link to="/signup">Signup</Link>
            </div>
            <div className="landing-content">
                <h1>Welcome to BASC Events</h1>
                <p>Your one-stop solution for managing and attending amazing events!</p>
            </div>
        </div>
    );
};

export default LandingPage;


