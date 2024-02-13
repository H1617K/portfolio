import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../Styled/ContactUs.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
    <div className='contact-container'>
      <div className='contact-title '>
        <h1>Better Together</h1>
        <p>Let's chat. Tell us about your project.</p>
      </div>
      <div className='contact-form'>
        <form onSubmit={sendEmail}>
          <label>
            {/* Name: */}
            <input type="text" name="name" value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            {/* Email: */}
            <input type="email" name="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            {/* Message: */}
            <textarea name="message" value={message} placeholder='Message' onChange={(e) => setMessage(e.target.value)} required></textarea>
          </label>
          <input type="submit" value="Send" />
        </form>
      </div>
      <div className='contact-message '>
        <p>Or send us an email directly at info@forcewebtech.com</p>
      </div>
    </div>
  );
};

export default ContactUs;
