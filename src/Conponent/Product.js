import React from 'react';
import { Cloudservices, MobileappDevelopment, WebDevelopment } from '../Images/Images';

const Product = () => {
  const services = [
    {
        title: "Web Development",
        description: "Create responsive and user-friendly websites tailored to your business needs.",
        imageUrl: WebDevelopment,
      },
      {
        title: "Mobile App Development",
        description: "Build native or cross-platform mobile applications for iOS and Android.",
        imageUrl: MobileappDevelopment,
      },
      {
        title: "Cloud Services",
        description: "Leverage cloud computing solutions to scale your IT infrastructure and improve efficiency.",
        imageUrl: Cloudservices,
      }
  ];

  return (
    <section className="it-services">
      <div className="container">
        <h2>Our IT Services</h2>
        <div className="services-list">
          {services.map((service, index) => (
            <div className="service" key={index}>
              <img src={service.imageUrl} alt={service.title} />
              <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Product;
