import React from 'react';
import '../Styled/AboutUs.css';
import { team } from '../Images/Images';

const AboutUs = () => {

  const Phases =[
    {
      title: "1. Discover",
      description:"The Discover phase is all about discovering the variety of growth possibilities at your fingertips. By assessing the current state of your people, processes, and technology, we listen to your pain areas and assess what can set you on the path for growth.",
      icon:"fa-file-magnifying-glass",
    },
    {
      title: "2. Define",
      description:"The Define phase is designing a game plan. With your goals in mind, we brainstorm a solution and scope out the options that best suit your business’ functional and technical needs.",
      icon:"fa-laptop-arrow-down",
    },
    {
      title: "3. Implement",
      description:"The Implement phase is where the rubber meets the road. We work with your team to ensure that the solutions we define are effectively and efficiently executed. This phase is never a one-and-done transaction – we ensure that you’re satisfied with the results of implementation.",
      icon:"fa-gear-code",
    },
    {
      title: "4. Growth",
      description:"The Growth phase is where the magic happens! We will continue to work and engage with you to ensure that your newfound solution is adding the value your business needs to grow.",
      icon:"fa-chart-line-up",
    },
  ]

  return (
    <section>
      <div className='about-us'>
        <div className='aboutcountiner'>
          <div className="about-content">
            <h2>About Us</h2>
            <br/>
            <p>
            We are here to transform your ideas into reality. 
            </p>
            <p>
              Our technical experts are ready to take next challenge.
              </p>
          </div>
          <div className='ImageHand'>
            <img src={team} alt='team' />
          </div>
        </div>
        <br />
        <div className='OurProcess'>
          <div className='heder'>
           <h3>Our Process</h3>
          </div>
          <div className='Line'>
            <hr/>
          </div>
          <div className='P-deriception'>
            <p>Our process is for helping you through your business challenges and steering you toward your goals<br/> 
            and business growth. We follow a straightforward process, basic approach to growth that has a proven<br />
            success record with our happy customers!</p>
          </div>
        </div>
        <br />
        <div className='fourphases'>
          <div className='Header-fourphases'>
            <p>We have divided our process into four phases: Discover, Define, Implementation, and Growth.</p>
          </div>
          <div className='Phases'>
            <div className="Phases-list">
              {Phases.map((phase, index) => (
                <div className="Phase" key={index}>
                  <div className="Phases-icon">
                    <i className={phase.icon}></i>
                  </div>
                  <div className="Phases-info">
                    <h3>{phase.title}</h3>
                    <p>{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
