import React from 'react';
import '../styles/Header.css'; // Import the CSS for Header
import { Link, useNavigate } from 'react-router-dom'; // Use Link for navigation

function Header() {
    const navigate = useNavigate(); // Hook for navigation

    return (
        <header className="header">
            <div className="logo">Foodie Delight</div>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <button
                    className="cart-button"
                    onClick={() => navigate('/cart')} // Redirect to cart page
                >
                    Cart
                </button>
            </nav>
        </header>
    );
}

export default Header;
