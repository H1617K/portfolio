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
// import productsReducer from './productsReducer'; 
// import testimonialsReducer from './testimonialsReducer'; 