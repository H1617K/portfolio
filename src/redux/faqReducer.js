const initialState = {
    faqs: [], // Placeholder for FAQs data
    loading: false,
    error: null
  };
  
  // Define action types
  const ADD_FAQ = 'ADD_FAQ';
  const REMOVE_FAQ = 'REMOVE_FAQ';
  const FETCH_FAQS_REQUEST = 'FETCH_FAQS_REQUEST';
  const FETCH_FAQS_SUCCESS = 'FETCH_FAQS_SUCCESS';
  const FETCH_FAQS_FAILURE = 'FETCH_FAQS_FAILURE';
  
  // Reducer function
  const faqReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_FAQ:
        return {
          ...state,
          faqs: [...state.faqs, action.payload] // Add new FAQ to the state
        };
      case REMOVE_FAQ:
        return {
          ...state,
          faqs: state.faqs.filter(faq => faq.id !== action.payload) // Remove FAQ from the state by ID
        };
      case FETCH_FAQS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_FAQS_SUCCESS:
        return {
          ...state,
          loading: false,
          faqs: action.payload // Update faqs with fetched data
        };
      case FETCH_FAQS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload // Update error state with error message
        };
      default:
        return state;
    }
  };
  
  export default faqReducer;
  