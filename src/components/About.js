import React from 'react';
import './About.css'

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About OnShopIndia</h1>
        <p>
          OnShopIndia is your ultimate destination for the latest and greatest in electronic gadgets. 
          From cutting-edge smartphones to high-performance laptops, we offer a wide range of products 
          to meet all your tech needs. Whether you're looking to upgrade your home entertainment system 
          or find the perfect accessories, OnShopIndia brings you top-quality electronics at unbeatable prices. 
          Shop with us and experience innovation at your fingertips!
        </p>
        <p>
        OnShopIndia is a form of electronic commerce which allows consumers to directly buy goods or services from a seller over the Internet using a web browser or a mobile app. Consumers find a product of interest by visiting the website of the retailer directly or by searching among alternative vendors using a shopping search engine
        </p>
      </div>
      <div className="about-image">
        <img src="/images/about.jpg" alt="About CameraMart" />
      </div>
    </div>
  );
}

export default About;
