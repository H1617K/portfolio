// actions.js

//Blogs
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts
});

export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error
});

// FAQ
export const TOGGLE_FAQ = 'TOGGLE_FAQ';

export const toggleFaq = (index) => ({
  type: TOGGLE_FAQ,
  payload: index
});

// Services
export const TOGGLE_SERVICE = 'TOGGLE_SERVICE';

export const toggleService = (index) => ({
  type: TOGGLE_SERVICE,
  payload: index
});

// Product
export const FETCH_PRODUCT_DATA = 'FETCH_PRODUCT_DATA';

export const fetchProductData = () => ({
  type: FETCH_PRODUCT_DATA
});


// Testimonial
export const FETCH_TESTIMONIALS_DATA = 'FETCH_TESTIMONIALS_DATA';

export const fetchTestimonialsData = () => ({
  type: FETCH_TESTIMONIALS_DATA
});





// // Import action types
// import {
//     // Service API
//       ADD_SERVICE,
//       REMOVE_SERVICE,
//       FETCH_SERVICES_REQUEST,
//       FETCH_SERVICES_SUCCESS,
//       FETCH_SERVICES_FAILURE,
//       //Product API
//       ADD_PRODUCT,
//       REMOVE_PRODUCT,
//       FETCH_PRODUCTS_REQUEST,
//       FETCH_PRODUCTS_SUCCESS,
//       FETCH_PRODUCTS_FAILURE,
//       //Blogs API
//       ADD_POST,
//       REMOVE_POST,
//       FETCH_POSTS_REQUEST,
//       FETCH_POSTS_SUCCESS,
//       FETCH_POSTS_FAILURE,
//       //Testimonial API
//       ADD_TESTIMONIAL,
//       REMOVE_TESTIMONIAL,
//       FETCH_TESTIMONIALS_REQUEST,
//       FETCH_TESTIMONIALS_SUCCESS,
//       FETCH_TESTIMONIALS_FAILURE,
//       //FAQs API
//       ADD_FAQ,
//       REMOVE_FAQ,
//       FETCH_FAQS_REQUEST,
//       FETCH_FAQS_SUCCESS,
//       FETCH_FAQS_FAILURE
//     } from '../constants/Endpoints';
    
//     // Action creators for services
//     export const addService = (service) => ({
//       type: ADD_SERVICE,
//       payload: service
//     });
    
//     export const removeService = (id) => ({
//       type: REMOVE_SERVICE,
//       payload: id
//     });
    
//     export const fetchServicesRequest = () => ({
//       type: FETCH_SERVICES_REQUEST
//     });
    
//     export const fetchServicesSuccess = (services) => ({
//       type: FETCH_SERVICES_SUCCESS,
//       payload: services
//     });
    
//     export const fetchServicesFailure = (error) => ({
//       type: FETCH_SERVICES_FAILURE,
//       payload: error
//     });
    
//     // Action creators for products
//     export const addProduct = (product) => ({
//       type: ADD_PRODUCT,
//       payload: product
//     });
    
//     export const removeProduct = (id) => ({
//       type: REMOVE_PRODUCT,
//       payload: id
//     });
    
//     export const fetchProductsRequest = () => ({
//       type: FETCH_PRODUCTS_REQUEST
//     });
    
//     export const fetchProductsSuccess = (products) => ({
//       type: FETCH_PRODUCTS_SUCCESS,
//       payload: products
//     });
    
//     export const fetchProductsFailure = (error) => ({
//       type: FETCH_PRODUCTS_FAILURE,
//       payload: error
//     });
    
//     // Action creators for blog posts
//   export const addPost = (post) => ({
//       type: ADD_POST,
//       payload: {post}
//     });
    
//     export const removePost = (id) => ({
//       type: REMOVE_POST,
//       payload: id
//     });
    
//     export const fetchPostsRequest = () => ({
//       type: FETCH_POSTS_REQUEST
//     });
    
//     export const fetchPostsSuccess = (posts) => ({
//       type: FETCH_POSTS_SUCCESS,
//       payload: posts
//     });
    
//     export const fetchPostsFailure = (error) => ({
//       type: FETCH_POSTS_FAILURE,
//       payload: error
//     });
    
//     // Action creators for testimonials
//     export const addTestimonial = (testimonial) => ({
//       type: ADD_TESTIMONIAL,
//       payload: testimonial
//     });
    
//     export const removeTestimonial = (id) => ({
//       type: REMOVE_TESTIMONIAL,
//       payload: id
//     });
    
//     export const fetchTestimonialsRequest = () => ({
//       type: FETCH_TESTIMONIALS_REQUEST
//     });
    
//     export const fetchTestimonialsSuccess = (testimonials) => ({
//       type: FETCH_TESTIMONIALS_SUCCESS,
//       payload: testimonials
//     });
    
//     export const fetchTestimonialsFailure = (error) => ({
//       type: FETCH_TESTIMONIALS_FAILURE,
//       payload: error
//     });
    
//     // Action creators for FAQs
//     export const addFaq = (faq) => ({
//       type: ADD_FAQ,
//       payload: faq
//     });
    
//     export const removeFaq = (id) => ({
//       type: REMOVE_FAQ,
//       payload: id
//     });
    
//     export const fetchFaqsRequest = () => ({
//       type: FETCH_FAQS_REQUEST
//     });
    
//     export const fetchFaqsSuccess = (faqs) => ({
//       type: FETCH_FAQS_SUCCESS,
//       payload: faqs
//     });
    
//     export const fetchFaqsFailure = (error) => ({
//       type: FETCH_FAQS_FAILURE,
//       payload: error
//     });