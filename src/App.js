import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';


import DarkModeToggle from './components/DarkModeToggle';
import CartPage from './components/CartPage';
import './styles/App.css';

function App() {
    return (
        <Router basename="/Milestone2">
            <div className="App">
                <Header />
                <DarkModeToggle />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/menu" element={<MenuPage />} />
                    
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    
                    
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
