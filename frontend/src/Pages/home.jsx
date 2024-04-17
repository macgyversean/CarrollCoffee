import React from "react"; // Assuming there's a CSS file for styling
import "../index.css";

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Carroll Coffee</h1>
        <p>Your favorite place for premium coffee blends</p>
      </header>
      <section className="featured-coffees">
        <h2>Featured Coffees</h2>
        <div className="coffee-list">
          <div className="coffee-item">
            <img src="/images/latte.jpg" alt="Latte" />
            <h3>Classic Latte</h3>
            <p>Enjoy the smooth and creamy taste of our classic latte.</p>
          </div>
          <div className="coffee-item">
            <img src="/images/espresso.jpg" alt="Espresso" />
            <h3>Robust Espresso</h3>
            <p>Experience the rich and bold flavors of our espresso.</p>
          </div>
          <div className="coffee-item">
            <img src="/images/cappuccino.jpg" alt="Cappuccino" />
            <h3>Creamy Cappuccino</h3>
            <p>Delight in the frothy goodness of our cappuccino.</p>
          </div>
        </div>
      </section>
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          At Carroll Coffee, we believe in the power of a great cup of coffee.
          Founded in 2010, we've been serving the community with high-quality,
          sustainably sourced coffee beans from around the world. Our mission is
          to create a memorable coffee experience for all our customers, whether
          you're a coffee aficionado or just need a morning pick-me-up.
        </p>
      </section>
      <footer className="home-footer">
        <p>© 2023 Carroll Coffee. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
