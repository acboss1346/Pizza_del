import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to our world of flavors and creativity!

At our core, we believe that great food is more than just a meal—it's an experience. Our journey began with a simple passion for bringing people together through delicious, thoughtfully prepared dishes. Every ingredient is chosen with care, every recipe crafted with love, and every plate served with pride.

We are committed to quality, innovation, and customer satisfaction. Whether you’re visiting us for a quick bite or a special occasion, we strive to make every moment memorable. Our team of chefs, designers, and dreamers work hand in hand to deliver not just food, but joy on a plate.

Thank you for being a part of our story. Let’s continue this flavorful journey together!


        </p>
      </div>
    </div>
  );
}

export default About;