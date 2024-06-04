import React from 'react';
import Header from './Header';
import './MainPage.css';
import HeroImage from '/Users/new/Downloads/Projects/zayteee/src/assets/hero image.png'; // Import your hero image

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
          </div>
          <div className="hero-image">
            <img src={HeroImage} alt="Hero" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainPage;