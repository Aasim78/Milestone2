import React, { useState } from 'react';
import '../styles/ContactPage.css';

function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {};
        if (!formData.name) validationErrors.name = 'Name is required';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
            validationErrors.email = 'Valid email is required';
        if (!formData.message) validationErrors.message = 'Message is required';

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setSubmitted(true);
            // Here you could send the form data to your server
        }
    };

    return (
        <main className="contact-page">
            <h2>Contact Us</h2>
            {submitted ? (
                <p className="success-message">Thank you for reaching out! We'll get back to you soon.</p>
            ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}

                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}

                    <label>Message:</label>
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    {errors.message && <p className="error">{errors.message}</p>}

                    <button type="submit">Submit</button>
                </form>
            )}

            <section className="contact-info">
                <h3>Visit Us</h3>
                <p>Sahyadri College, Adyar, Mangaluru, Karnataka</p>
                <h3>Call Us</h3>
                <p>+91 94567 89087</p>
            </section>

            <section className="map">
                <h3>Find Us Here</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.638885754707!2d74.92280267454501!3d12.866584817173047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba358ff28ef6cf3%3A0xe93953598f53c53c!2sSahyadri%20College%20Of%20Engineering%20%26%20Management%20(Autonomous)!5e0!3m2!1sen!2sus!4v1734724417046!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    allowFullScreen=""
                    loading="lazy"
                    title="Our Location"
                ></iframe>
            </section>
        </main>
    );
}

export default ContactPage;
