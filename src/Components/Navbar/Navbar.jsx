import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="nWrapper">
            <div className="nLeft">
                <div className="nLogo">
                    Arman
                </div>
                <span>toggle</span>
            </div>
            <div className="nRight">
                <div className="nList">
                    <ul style={{listStyleType: 'none'}}>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experiences</li>
                        <li>Portfolio</li>
                        <li>Tertimonials</li>
                    </ul>
                </div>
                <button className="button nButton">Contact Us</button>
            </div>
        </div>
    )
}

export default Navbar