import React, { useState } from 'react';
import '../Styled/FAQ.css'; 

const FAQ = () => {
  const faqsData  = [
    {
      question: "What kind of digital marketing services do you offer?",
      answer: "We offer a comprehensive range of digital marketing services, including search engine optimization (SEO), pay-per-click advertising (PPC), social media marketing, email marketing, content marketing, and more."
    },
    {
      question: "How do you ensure the security of the applications you develop?",
      answer: "Security is a top priority for us. We employ industry best practices, conduct regular security audits, implement encryption techniques, and stay updated on the latest security threats to ensure that the applications we develop are highly secure."
    },
    {
      question: "Do you provide ongoing maintenance and support for the products you develop?",
      answer: "Yes, we offer ongoing maintenance and support services to ensure that your products continue to perform optimally. Our support team is available to address any issues, implement updates, and provide technical assistance as needed."
    },
    {
      question: "Can you help with custom software development tailored to our specific business needs?",
      answer: "Absolutely! We specialize in custom software development and can create tailored solutions to address your unique business requirements. Our team will work closely with you to understand your needs and deliver a customized solution that meets your objectives."
    },
    {
      question: "What is your approach to project management?",
      answer: "We follow agile project management methodologies to ensure transparency, collaboration, and flexibility throughout the development process. Our team conducts regular meetings, provides progress updates, and welcomes client feedback to ensure that projects are delivered on time and within budget."
    },
    {
      question: "Do you provide training or documentation for the products you deliver?",
      answer: "Yes, we offer training sessions and provide comprehensive documentation for the products we deliver to ensure that your team is equipped with the knowledge and resources needed to effectively use and maintain the software."
    },
    {
      question: "How do you handle scalability for large-scale applications?",
      answer: "Scalability is a key consideration in our development process. We design our applications with scalability in mind, employing techniques such as load balancing, horizontal scaling, and microservices architecture to ensure that they can handle increased user loads and data volumes as your business grows."
    }
  ];

  const [faqs, setFaqs] = useState(faqsData); 

  const toggleFAQ = (index) => {
    const newFaqs = [...faqs]; // Create a copy of the faqs array
    newFaqs[index].isOpen = !newFaqs[index].isOpen; // Toggle the isOpen state of the clicked FAQ
    setFaqs(newFaqs); // Update the state with the modified array
  };

  

  return (
    <section className="faq-section">
      <div className="it-faq">
        <div className='FAQHeader'>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className='FAQHeader2'>
          <h5>Everything you wanted to know about Acquisio and weren’t afraid to ask!</h5>
        </div>
        <br />
        <div className="container">
          <div className="faq-list">
            {faqs.slice(0, 10).map((faq, index) => (
              <div className="faq" key={index}>
                <h3 onClick={() => toggleFAQ(index)}>{faq.question}</h3>
                {faq.isOpen && <p>{faq.answer}</p>} {/* Render the answer if isOpen is true */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;