import React from 'react';
import '../Styled/AboutUs.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { ACCOUNTABILITY, COMMITMENT1, EXCELLENCE, Efficiency, INNOVATION, LevelofCommitment, Qualitycode, TRANSPARENCY, team } from '../Images/Images';
import ContactUs from './ContactUs';

const AboutUs = () => {

  const Phases =[
    {
      title: "1. Discover",
      description:"The Discover phase is all about discovering the variety of growth possibilities at your fingertips. By assessing the current state of your people, processes, and technology, we listen to your pain areas and assess what can set you on the path for growth.",
      icon:"fa-solid fa-chart-line-up",
    },
    {
      title: "2. Define",
      description:"The Define phase is designing a game plan. With your goals in mind, we brainstorm a solution and scope out the options that best suit your business’ functional and technical needs.",
      icon:"fa-regular fa-laptop-arrow-down",
    },
    {
      title: "3. Implement",
      description:"The Implement phase is where the rubber meets the road. We work with your team to ensure that the solutions we define are effectively and efficiently executed. This phase is never a one-and-done transaction – we ensure that you’re satisfied with the results of implementation.",
      icon:"fa-regular fa-gear-code",
    },
    {
      title: "4. Growth",
      description:"The Growth phase is where the magic happens! We will continue to work and engage with you to ensure that your newfound solution is adding the value your business needs to grow.",
      icon:"fa-solid fa-chart-line-up",
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
        <br /><br />
        <div className='fourphases'>
          <div className='Header-fourphases'>
            <p>We have divided our process into four phases: Discover, Define, Implementation, and Growth.</p>
          </div><br />
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
        <br /><br/>
          <div className='Businessplans'>
            <br/>
            <div className='Paragraph'>
              <p>
              ForceWebTech is a tech consulting company, specialized in building and integrating a wide range of web and<br />
              mobile solutions. Our objective is to deliver robust, scalable, innovative, and quality solutions with strict deadlines<br />
              in line with your business plans.
              </p>
            </div><hr />
            <div className='ParahraphThings'>
              <div className='QualityOfCode'>
              <img src={Qualitycode} alt='Qualitycode' />
              <p>Quality of Code.</p>
              </div>
              <div className='Communication'>
              <img src={Efficiency} alt='Communication' />
              <p>Efficiency of Communication.</p>
              </div>
              <div className='LevelofCommitment'>
              <img src={LevelofCommitment} alt='LevelofCommitment' />
              <p>Level  of Commitment. </p>
              </div>
            </div>
          </div>
          <br /><br/><br/>
          <div className='CoreValus'>
              <div className='Paragraph1'>
                <p>
                Honesty, Ethics and Respect are the pillars that ForceWebTech follow for business collaboration. Our core values are the guiding principles upon we <br />
                was founded and how we strive to conduct our business on a daily basis.
                </p>
                <br/>
                <div className='ParahraphThings1'>
                  <div className='EXCELLENCE'>
                  <img src={EXCELLENCE} alt='EXCELLENCE' />
                  <p>EXCELLENCE</p>
                  </div>
                  <div className='INNOVATION'>
                  <img src={INNOVATION} alt='INNOVATION' />
                  <p>INNOVATION</p>
                  </div>
                  <div className='TRANSPARENCY'>
                  <img src={TRANSPARENCY} alt='TRANSPARENCY' />
                  <p>TRANSPARENCY </p>
                  </div>
                  <div className='COMMITMENT1'>
                  <img src={COMMITMENT1} alt='COMMITMENT1' />
                  <p>COMMITMENT </p>
                  </div>
                  <div className='ACCOUNTABILITY'>
                  <img src={ACCOUNTABILITY} alt='ACCOUNTABILITY' />
                  <p>ACCOUNTABILITY </p>
                  </div>
                </div>
              </div>
            </div>
            <ContactUs/>
      </div>
    </section>
  );
}

export default AboutUs;
