import React from 'react';
import { Harsh1, HarshPhoto } from '../Images/Images';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Harsh Raval",
      company: "FWT Corporation",
      quote: "Our company's website was outdated and ineffective until we engaged with OurCompany. Their web development team delivered an exceptional solution that exceeded our expectations.",
      avatarUrl: HarshPhoto,
    },
    {
      name: "Shery Patel ",
      company: "Dutch Solutions",
      quote: "The mobile app developed by OurCompany has transformed the way our customers interact with our business. It's intuitive, fast, and has greatly improved our user experience.",
      avatarUrl: Harsh1,
    },
  ];

  return (
    <section className="it-testimonials">
      <div className="container">
        <h2>Client Testimonials</h2>
        <div className="testimonials-list">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <img src={testimonial.avatarUrl} alt={testimonial.name} />
              <div className="testimonial-info">
                <p>"{testimonial.quote}"</p>
                <p className="name">{testimonial.name}</p>
                <p className="company">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
