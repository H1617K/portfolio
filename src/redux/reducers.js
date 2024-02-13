import { combineReducers } from 'redux';
import blogReducer from './blogReducer'; 
import faqReducer from './faqReducer';
import servicesReducer from './servicesReducer';

const rootReducer = combineReducers({
  blog: blogReducer,
  faq: faqReducer,
  service: servicesReducer
});


export default rootReducer;


// import { combineReducers } from 'redux';
// import servicesReducer from './servicesReducer'; 
// import productsReducer from './productsReducer'; 
// import blogReducer from './blogReducer'; 
// import testimonialsReducer from './testimonialsReducer'; 
// import faqReducer from './faqReducer'; 

// export default combineReducers({
//   services: servicesReducer,
//   products: productsReducer,
//   blog: blogReducer,
//   testimonials: testimonialsReducer,
//   faq: faqReducer
// });