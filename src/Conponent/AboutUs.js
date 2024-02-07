import React from 'react';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Welcome to OurCompany, your trusted partner in providing top-notch IT solutions. 
            Our mission is to deliver innovative and tailored services that meet the unique 
            needs of our clients, helping them achieve their business goals.
          </p>
        </div>
        <div className="services">
          <h3>Our Services</h3>
          <ul>
            <li>
              <h4>Web Development</h4>
              <p>Create responsive and user-friendly websites tailored to your business needs.</p>
            </li>
            <li>
              <h4>Mobile App Development</h4>
              <p>Build native or cross-platform mobile applications for iOS and Android.</p>
            </li>
            <li>
              <h4>Cloud Services</h4>
              <p>Leverage cloud computing solutions to scale your IT infrastructure and improve efficiency.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
