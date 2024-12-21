import React, { useState } from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="logo">Foodie Delight</div>
            <button
                className={`menu-toggle ${menuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
            >
                <div className="menu-icon"></div>
                <div className="menu-icon"></div>
                <div className="menu-icon"></div>
            </button>
            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/cart">Cart</Link>
            </nav>
        </header>
    );
}

export default Header;
