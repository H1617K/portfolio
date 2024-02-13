import { combineReducers } from 'redux';
import blogReducer from './blogReducer'; 
import faqReducer from './faqReducer';
import servicesReducer from './servicesReducer';
import productReducer from './productsReducer';
import testimonialReducer from './testimonialsReducer';

const rootReducer = combineReducers({
  blog: blogReducer,
  faq: faqReducer,
  service: servicesReducer,
  product: productReducer,
  testimonials: testimonialReducer
});


export default rootReducer;
