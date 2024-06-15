import React from 'react';
import Header from './Header';
import './MainPage.css';
import { Link } from 'react-router-dom';
import About from './About'; // Import the About component
import Services from './Services'; // Import the Services component
import Contact from './Contact'; // Import the Contact component

const TextAnimation = () => {
  return (
    <h1 className="text-animation">
      <span>Z</span>
      <span>a</span>
      <span>y</span>
      <span>&nbsp;</span>
      <span>T</span>
      <span>s</span>
      <span>h</span>
      <span>i</span>
      <span>r</span>
      <span>t</span>
      <span>&nbsp;</span>
      <span>D</span>
      <span>e</span>
      <span>s</span>
      <span>i</span>
      <span>g</span>
      <span>n</span>
    </h1>
  );
};

const MainPage = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-content">
            <TextAnimation />
            <p className="hero-text">Locally pressed, and reliably printed garments</p>
            <Link to="/contact" className="contact-btn">
              Contact Us Now
            </Link>
          </div>
          <div className="hero-image">
            <img src="https://i.postimg.cc/x12WrqfC/s-l1600-removebg-preview.png" alt="Hero" />
          </div>
        </section>
        {/* Add the About component */}
        <About />
        <Services />
        <Contact />
      </main>
    </div>
  );
};

export default MainPage;