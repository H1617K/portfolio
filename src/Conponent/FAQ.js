import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What web development technologies do you use?",
      answer: "We specialize in a wide range of web development technologies, including HTML, CSS, JavaScript, React.js, Angular, and more."
    },
    {
      question: "Do you offer mobile app development services?",
      answer: "Yes, we provide mobile app development services for both iOS and Android platforms, using technologies like React Native, Flutter, and native development tools."
    },
    {
      question: "Can you help migrate our infrastructure to the cloud?",
      answer: "Absolutely! Our team has extensive experience in cloud computing and can assist you in migrating your infrastructure to popular cloud platforms like AWS, Azure, and Google Cloud."
    },
  ];

  return (
    <section className="it-faq">
      <div className="container">
        <h2>FAQ</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq" key={index}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
