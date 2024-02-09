const initialState = {
    testimonials: [], // Placeholder for testimonials data
    loading: false,
    error: null
  };
  
  // Define action types
  const ADD_TESTIMONIAL = 'ADD_TESTIMONIAL';
  const REMOVE_TESTIMONIAL = 'REMOVE_TESTIMONIAL';
  const FETCH_TESTIMONIALS_REQUEST = 'FETCH_TESTIMONIALS_REQUEST';
  const FETCH_TESTIMONIALS_SUCCESS = 'FETCH_TESTIMONIALS_SUCCESS';
  const FETCH_TESTIMONIALS_FAILURE = 'FETCH_TESTIMONIALS_FAILURE';
  
  // Reducer function
  const testimonialsReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TESTIMONIAL:
        return {
          ...state,
          testimonials: [...state.testimonials, action.payload] // Add new testimonial to the state
        };
      case REMOVE_TESTIMONIAL:
        return {
          ...state,
          testimonials: state.testimonials.filter(testimonial => testimonial.id !== action.payload) // Remove testimonial from the state by ID
        };
      case FETCH_TESTIMONIALS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_TESTIMONIALS_SUCCESS:
        return {
          ...state,
          loading: false,
          testimonials: action.payload // Update testimonials with fetched data
        };
      case FETCH_TESTIMONIALS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload // Update error state with error message
        };
      default:
        return state;
    }
  };
  
  export default testimonialsReducer;
  