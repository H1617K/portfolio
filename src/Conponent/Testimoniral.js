import React from 'react';
import '../Styled/Testimoniral.css'
import { testimonialsimg } from '../Images/Images';

const Testimonials = () => {
  const testimonials = [
    {
      id: "1",
      name: "Harsh Raval",
      scompany: "FWT Corporation",
      quote: " It’s always a pleasure to work with ForceWebTech team. They are personable, responsive, and results-oriented!",
    },
    {
      id: "2",
      name: "Shery Patel",
      company: "Dutch Solutions",
      quote: "Always available, extremely knowledgeable, and a tremendous “can-do” attitude. Our company was on a tight timeline and strict budget to create a first-class mobile interpretation app, and ForceWebTech was the perfect partner. Their guidance and advice was invaluable in producing that app which easily exceeded my expectations… the entire company was thrilled with it! Without any hesitation… highly recommended.",
    },
    {
      id: "3",
      name: "John Smith",
      company: "Tech Innovations Ltd.",
      quote: "I have worked with the ForceWebTech team for several years before they officially come on floor. Unflinchingly reliable, professional and proactive from a technology and security standpoint. Over the years, ForceWebTech has streamlined our communications so that any of our website updates or other needs are handled seamlessly.",
    },
    {
      id: "4",
      name: "Emily Jones",
      company: "Global Enterprises Inc.",
      quote: "ForceWebTech is attentive, personable, and professional. ForceWebTech team provide great support for my company’s needs.",
    },
    {
      id: "5",
      name: "David Brown",
      company: "XYZ Startups",
      quote: "Always available to answer any questions. Very knowledgeable about the services they provide. Would recommend to anyone!",
    },
    {
      id: "6",
      name: "Sophia Lee",
      company: "E-commerce Emporium",
      quote: "It is a pleasure working with ForceWebTech. They are extremely knowledgeable, business savvy, and positive. Their approach to challenges and opportunities is innovative. They are highly productive and consistently delivers as promised. And to top it all off, Their PM is gracious, kind, and insightful.",
    },
    // {
    //   id: "7",
    //   name: "Michael Johnson",
    //   company: "Tech Solutions Co.",
    //   quote: "",
    // },
    {
      id: "8",
      name: "Sarah Clark",
      company: "Innovative Tech Ltd.",
      quote: "It is a pleasure working with ForceWebTech. They are extremely knowledgeable, business savvy, and positive. Their approach to challenges and opportunities is innovative. They are highly productive and consistently delivers as promised. And to top it all off, Their PM is gracious, kind, and insightful.",
    },
    {
      id: "9",
      name: "Daniel Wilson",
      company: "Data Analytics Inc.",
      quote: "Great results. Enjoyable to work with, and most importantly, enabled us to have the presence on the web we needed to conduct business in today’s market.",
    },
    {
      id: "10",
      name: "Rachel Adams",
      company: "Creative Solutions Agency",
      quote: "We’ve been very pleased with the apps that ForceWebTech has developed. Historically, we’ve kept all development in-house, but on a whim we decided to give ForceWebTech a chance. The first few apps the developed were very solid. Production time was fast and the final apps are very stable. We’ve now decided to expand the line of apps that we’ll have them build for us.",
    },
    // {
    //   id: "11",
    //   name: "Peter Thompson",
    //   company: "Logistics Solutions Ltd.",
    //   quote: "",
    // },
    {
      id: "12",
      name: "Michelle Williams",
      company: "Healthcare Innovations Corp.",
      quote: "ForceWebTech was able to complete our app, on deadline, what two previous companies were unable to accomplish for 1 year. They were the prefect balance of professionalism, diligence and pricing. But most important, they were able to deliver a solid product – one we can be proud of.",
    },
    {
      id: "13",
      name: "Kevin Miller",
      company: "Financial Advisors Group",
      quote: "Working with ForceWebTech has been an amazing experience. I thoroughly appreciate the thoughtful, fully engaged, and the above and beyond work/awareness that Niket and team brings to the table. Not only do I feel fully taken care of, but there is a strong foundation of integrity with Niket and ForceWebTech. Their work has been exceptional, timely, and collaborative. I look to have a very long lasting business relationship with ForceWebTech and highly recommend them for app development and much, much more. Thank you for all of the wonderful work!",
    },
    {
      id: "14",
      name: "Laura Rodriguez",
      company: "Travel Adventures Inc.",
      quote: "We partnered with ForceWebTech to leverage their market leading expertise in mobile app development. This collaborative partnership resulted in one of the more user friendly apps we have seen out there.",
    },
    {
      id: "15",
      name: "Alex Nguyen",
      company: "Tech Innovate Solutions",
      quote: "I honestly could not be any happier with the work whole ForceWebTech team did for us. The product management, communication and process are hands down the best I’ve ever experienced. The end product exceeded expectations and were done in record time. And I was amazed at how the code was still clean, original and concise. There is no doubt that I’ll continue to use ForceWebTech. These guys are rock stars.",
    }
];


  return (
    <section className="it-testimonials">
      <div className="container">
      <div className='ImageContainer'>
        <img src={testimonialsimg} alt="testimonialsimg" />
      </div>
      <div className="testimonials-list">
      {testimonials.map((testimonial, index) => (
        <div className={`testimonial ${index % 2 === 0 ? 'even' : 'odd'}`} key={index}>
          <div className="testimonial-info">
            <p className="quote">"{testimonial.quote}"</p>
            <p className="name">{testimonial.name}</p>
          </div>
        </div>
      ))}
    </div>
      </div>
    </section>
  );
}
export default Testimonials;