import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import emailjs from 'emailjs-com';
import '../Styled/ContactUs.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const location = useLocation(); 

  const isContactPage = location.pathname === '/ContactUs'; 

  useEffect(() => {
    // Reset form fields when component unmounts (not strictly necessary, but good practice)
    return () => {
      setName('');
      setEmail('');
      setMessage('');
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ycqxuxx', 'template_jdw4x5f', e.target, 'XOm3CVsTvGOOIoHsY')
      .then((result) => {
          console.log(result.text);
          // Reset the form fields after successful submission
          setName('');
          setEmail('');
          setMessage('');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <div className='contact-container'>
      <div className='contact-bg'></div> {/* Container for the background image */}
      <div className='contact-title '>
        <h1>Better Together</h1>
        <p>Let's chat. Tell us about your project.</p>
      </div>
      <div className='contact-form'>
        <form onSubmit={sendEmail}>
          <label>
            <input type="text" name="name" value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            <input type="email" name="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            <textarea name="message" value={message} placeholder='Message' onChange={(e) => setMessage(e.target.value)} required></textarea>
          </label>
          <input type="submit" value="Send" />
        </form>
      </div>
      <div className='contact-message '>
        <p>Or send us an email directly at info@forcewebtech.com</p>
      </div>
    </div>
    <br />
    {isContactPage && (
      <div className='GoogleMap'>
        <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d918.2337036342235!2d72.49634316955164!3d22.989424398699814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6947d1f54949a59%3A0xc90c18118973530d!2sForcewebtech!5e0!3m2!1sen!2sin!4v1707972618685!5m2!1sen!2sin"
          width="1500" height="400" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    )}
    </>
  );
};

export default ContactUs;
