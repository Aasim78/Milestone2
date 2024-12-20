import React from 'react';
import '../styles/Header.css'; // Import the CSS for Header
import { useNavigate } from 'react-router-dom'; // For navigation

function Header() {
    const navigate = useNavigate(); // Hook for navigation

    return (
        <header className="header">
            <div className="logo">Foodie Delight</div>
            <nav className="nav">
                <a href="/">Home</a>
                <a href="/menu">Menu</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
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
