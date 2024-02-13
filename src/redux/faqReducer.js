// reducer.js
import { TOGGLE_FAQ } from './actions';

const initialState = {
  faqs: [{
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
    }], // initialize faqs array with isOpen property
};

const faqReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAQ:
      const newFaqs = [...state.faqs];
      newFaqs[action.payload].isOpen = !newFaqs[action.payload].isOpen;
      return {
        ...state,
        faqs: newFaqs
      };
    default:
      return state;
  }
};

export default faqReducer;




// const initialState = {
//     faqs: [], // Placeholder for FAQs data
//     loading: false,
//     error: null
//   };
  
//   // Define action types
//   const ADD_FAQ = 'ADD_FAQ';
//   const REMOVE_FAQ = 'REMOVE_FAQ';
//   const FETCH_FAQS_REQUEST = 'FETCH_FAQS_REQUEST';
//   const FETCH_FAQS_SUCCESS = 'FETCH_FAQS_SUCCESS';
//   const FETCH_FAQS_FAILURE = 'FETCH_FAQS_FAILURE';
  
//   // Reducer function
//   const faqReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case ADD_FAQ:
//         return {
//           ...state,
//           faqs: [...state.faqs, action.payload] // Add new FAQ to the state
//         };
//       case REMOVE_FAQ:
//         return {
//           ...state,
//           faqs: state.faqs.filter(faq => faq.id !== action.payload) // Remove FAQ from the state by ID
//         };
//       case FETCH_FAQS_REQUEST:
//         return {
//           ...state,
//           loading: true,
//           error: null
//         };
//       case FETCH_FAQS_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           faqs: action.payload // Update faqs with fetched data
//         };
//       case FETCH_FAQS_FAILURE:
//         return {
//           ...state,
//           loading: false,
//           error: action.payload // Update error state with error message
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default faqReducer;
  