import React, { useState } from 'react';
import './styles.css';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log(formData);
    };

    return (
        <div>
            <header>
                <h1>Contact Us</h1>
            </header>

            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact</a>
            </nav>

            <div className="container">
                <div className="main-content">
                    <h2>Get in Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br /><br />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br /><br />

                        <label htmlFor="message">Message:</label><br />
                        <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea><br /><br />

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

            <footer>
                &copy; 2024 My Website. All rights reserved.
            </footer>
        </div>
    );
}

export default ContactUs;
