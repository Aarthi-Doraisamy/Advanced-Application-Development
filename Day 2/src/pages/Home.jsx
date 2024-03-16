// Home.jsx

import React from 'react';
import './styles.css'; // Import your CSS file

function Home() {
  return (
    <div>
      <header className="navbar">
        <div className="navbar-container">
          <h1 className="navbar-logo">Boat House Booking</h1>
          <nav>
            <ul className="navbar-menu">
              <li className="navbar-item"><a href="#">Home</a></li>
              <li className="navbar-item"><a href="#">About</a></li>
              <li className="navbar-item"><a href="#">Boats</a></li>
              <li className="navbar-item"><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <h2>Welcome to Boat House Booking</h2>
          <p>Find the perfect boat house for your next getaway!</p>
          <a href="#" className="btn">Explore Now</a>
        </section>

        <section className="featured-boats">
          <h2>Featured Boats</h2>
          <div className="boat">
            <img src="boat1.jpg" alt="Boat 1" />
            <h3>Boat 1</h3>
            <p>Description of Boat 1.</p>
            <a href="#" className="btn">Book Now</a>
          </div>
          <div className="boat">
            <img src="boat2.jpg" alt="Boat 2" />
            <h3>Boat 2</h3>
            <p>Description of Boat 2.</p>
            <a href="#" className="btn">Book Now</a>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Boat House Booking. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
