import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="about-content">
        <p>
          We are a passionate team dedicated to creating simple, effective solutions 
          for our customers. Founded in 2020, we've grown from a small startup to 
          a trusted name in our industry.
        </p>
        <p>
          Our mission is to make technology accessible and useful for everyone, 
          with products that just work.
        </p>
        <h2>Our Team</h2>
        <div className="team">
          <div className="member">
            <h3>Hemant Jangde</h3>
            <p>Lead Developer</p>
          </div>
          <div className="member">
            <h3>Niraj Sahu</h3>
            <p>Junior Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;