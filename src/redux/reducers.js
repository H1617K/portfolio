import { combineReducers } from 'redux';
import servicesReducer from './servicesReducer'; 
import productsReducer from './productsReducer'; 
import blogReducer from './blogReducer'; 
import testimonialsReducer from './testimonialsReducer'; 
import faqReducer from './faqReducer'; 

export default combineReducers({
  services: servicesReducer,
  products: productsReducer,
  blog: blogReducer,
  testimonials: testimonialsReducer,
  faq: faqReducer
});