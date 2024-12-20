import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css';
import Footer from './Footer'; // Import Footer component
import DarkModeToggle from './DarkModeToggle'; // Import DarkModeToggle component
import { useNavigate } from 'react-router-dom'; // For navigation

const fetchFeaturedDishes = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                "Pizza",
                "Burger",
                "Pasta",
                "Sushi",
                "Salad",
                "Tacos",
                "Sandwich",
                "Steak",
                "Ramen",
                "Ice Cream",
            ]);
        }, 1000);
    });
};

const foodImages = {
    Pizza: "/pizza.jpg",
    Burger: "/burger.jpg",
    Pasta: "/pasta.jpg",
    Sushi: "/sushi.jpg",
    Salad: "/salad.jpg",
    Tacos: "/tacos.jpg",
    Sandwich: "/sandwich.jpg",
    Steak: "/steak.jpg",
    Ramen: "/ramen.jpg",
    IceCream: "/icecream.jpg",
};

function HomePage() {
    const [featuredDishes, setFeaturedDishes] = useState([]);
    const [promotion, setPromotion] = useState("Seasonal Promotions Coming Soon!");
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        fetchFeaturedDishes().then((dishes) => setFeaturedDishes(dishes));
    }, []);

    return (
        <div className="homepage">
            <header>
                <div className="header-top">
                    <h2>Welcome to Foodie Delight!</h2>
                </div>
                <div className="carousel">
                    <p>{promotion}</p>
                </div>
            </header>

            <main>
                <section className="featured-items">
                    <h3>Featured Dishes</h3>
                    <div className="slider">
                        {featuredDishes.length === 0 ? (
                            <p>Loading...</p>
                        ) : (
                            featuredDishes.map((dish, index) => (
                                <div key={index} className="slide">
                                    <img
                                        src={foodImages[dish.replace(/\s+/g, '')]} // Handle spaces in dish names
                                        alt={dish}
                                        className="food-image"
                                    />
                                    <h4>{dish}</h4>
                                    <button
                                        className="menu-button"
                                        onClick={() => navigate('/menu')}
                                    >
                                        View More
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </section>
            </main>

            
        </div>
    );
}

export default HomePage;
