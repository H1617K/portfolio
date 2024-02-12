import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import '../Styled/Service.css'; 
import { JoinHand } from '../Images/Images';
import ContactUs from './ContactUs';

const Services = () => {
  
  const services = [
    {
      title: "Web Development",
      description: "Create responsive and user-friendly websites tailored to your business needs.",
      icon: "fas fa-laptop-code" 
    },
    {
      title: "Mobile App Development",
      description: "Build native or cross-platform mobile applications for iOS and Android.",
      icon: "fas fa-mobile-alt" 
    },
    {
      title: "Cloud Services",
      description: "Leverage cloud computing solutions to scale your IT infrastructure and improve efficiency.",
      icon: "fas fa-cloud"
    },
  ];

  const WebTech = [
    {
      title: "PHP",
      description: "PHP is a server side scripting language that is embedded in HTML.",
      icon: "fab fa-php"
    },
    {
      title: "Laravel",
      description: "Laravel is a PHP framework, open-source, robust, and user-friendly framework.",
      icon: "fab fa-laravel"
    },
    {
      title: "React JS",
      description: "React JS is a free and open-source front-end JavaScript library.",
      icon: "fab fa-react",
    }
  ];

  const MobileTech =[
    {
      title: "IOS",
      description: "iOS is a mobile operating system created and developed by Apple Inc. exclusively for its hardware.",
      icon: "fa-brands fa-apple",
    },
    {
      title: "Android",
      description: "Android is a mobile operating system developed by Google. It is used by several smartphones and tablets.",
      icon: "fa-brands fa-android"
    }
  ]

  const CloudTech = [
    {
      title: "AWS",
      description: "Amazon Web Services is one of the leading cloud computing examples in the world.",
      icon: "fa-brands fa-aws"
    },
    {
      title: "Salesforce",
      description: "It provides customer relationship management applications focused on sales and customer service.",
      icon: "fa-brands fa-salesforce"
    }
  ]

  return (
    <section>
      <div className="services">
        <div className="container">
          <div className='header'>
            <h2>Our Services</h2>
          </div>
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
        <div className="web-tech">
          <div className='header1'>
            <h2>Web Technologies</h2>
          </div>
        <div className="tech-container">
          <div className="web-tech-list">
            {WebTech.map((tech, index) => (
              <div className="tech" key={index}>
                <div className="tech-icon">
                  <i className={tech.icon}></i>
                </div>
                <div className="tech-info">
                  <h3>{tech.title}</h3>
                  <p>{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      <div className='Tamplete'>
        <div className='JoinHand'>
          <div className='Hand-join'>
            <p>Lets Join Hands To Turn Your Ideas Into Reality for better service.</p>
          </div>
          <div className='ImageHand'></div>
           <img src={JoinHand} alt='join hands' />
          </div>
      </div>
      <br />
      <div className="mobile-tech">
          <div className='header1'>
            <h2>Mobile Development</h2>
          </div>
        <div className="tech-container">
          <div className="web-tech-list">
            {MobileTech.map((Mobile, index) => (
              <div className="tech" key={index}>
                <div className="tech-icon">
                  <i className={Mobile.icon}></i>
                </div>
                <div className="tech-info">
                  <h3>{Mobile.title}</h3>
                  <p>{Mobile.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      <div className="web-tech">
          <div className='header1'>
            <h2>Cloud Services</h2>
          </div>
        <div className="tech-container">
          <div className="web-tech-list">
            {CloudTech.map((cloud, index) => (
              <div className="tech" key={index}>
                <div className="tech-icon">
                  <i className={cloud.icon}></i>
                </div>
                <div className="tech-info">
                  <h3>{cloud.title}</h3>
                  <p>{cloud.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ContactUs/>
      </div>
    </section>
  );
}

export default Services;
