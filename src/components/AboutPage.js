import React from 'react';
import '../styles/AboutPage.css';

function AboutPage() {
    return (
        <main className="about-page">
            <h2>About Us</h2>
            <p className="mission">
                At Food Delight, our mission is to serve the finest, freshest, and most delicious meals while fostering a welcoming community for food lovers.
            </p>

            <section className="timeline">
                <h3>Our Journey</h3>
                <ul>
                    <li>
                        <span className="year">2000</span>
                        <p>Our humble beginnings with a small pizzeria.</p>
                    </li>
                    <li>
                        <span className="year">2010</span>
                        <p>Expanded into gourmet dining with multiple locations.</p>
                    </li>
                    <li>
                        <span className="year">2020</span>
                        <p>Launched our online delivery platform and mobile app.</p>
                    </li>
                </ul>
            </section>

            <section className="gallery">
                <h3>Our Culinary Creations</h3>
                <div className="image-carousel">
                    <img src="/dish1.jpg" alt="Delicious Dish 1" />
                    <img src="/dish2.jpg" alt="Delicious Dish 2" />
                    <img src="/dish3.jpg" alt="Delicious Dish 3" />
                </div>
            </section>

            <section className="testimonials">
                <h3>What Our Customers Say</h3>
                <div className="testimonial">
                    <p>"The best dining experience! The food is out of this world, and the service is incredible!"</p>
                    <span>- Sarah J.</span>
                </div>
                <div className="testimonial">
                    <p>"A true gem! Everything from appetizers to dessert was perfect."</p>
                    <span>- Michael K.</span>
                </div>
            </section>
        </main>
    );
}

export default AboutPage;
