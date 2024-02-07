import React from 'react';
import '../Styled/Service.css'

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Create responsive and user-friendly websites tailored to your business needs.",
      icon: "fas fa-laptop-code" // Font Awesome icon class
    },
    {
      title: "Mobile App Development",
      description: "Build native or cross-platform mobile applications for iOS and Android.",
      icon: "fas fa-mobile-alt" // Font Awesome icon class
    },
    {
      title: "Cloud Services",
      description: "Leverage cloud computing solutions to scale your IT infrastructure and improve efficiency.",
      icon: "fas fa-cloud" // Font Awesome icon class
    },
  ];

  return (
    <section >
      <div className="services">
      <div className="container">
        <h2>Our Services</h2>
        <br />
        <div className="services-list">
          {services.map((service, index) => (
            <div className="service" key={index}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}

export default Services;
