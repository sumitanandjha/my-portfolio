import React from 'react';
import './AboutMe.css'; // Add this CSS file for animation styles

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          Hello! My name is <span className="highlight">Sumit Anand Jha</span>. 
          I am a passionate and dedicated final-year student pursuing Computer Science and Business Systems at JSS Science and Technology University. 
          I am fascinated by full-stack web development, problem-solving, and exploring cutting-edge technologies.
        </p>
        <p className="about-text">
          My experience includes building modern web applications using the MERN stack and tackling challenges in data structures and algorithms. 
          I have worked on projects like a Gmail clone and an e-commerce app and have contributed to open-source initiatives.
        </p>
        <a href="#contact" className="contact-button">Contact Me</a>
      </div>
    </section>
  );
};

export default About;
