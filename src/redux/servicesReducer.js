const initialState = {
    services: [], // Placeholder for services data
    loading: false,
    error: null
  };
  
  // Define action types
  const ADD_SERVICE = 'ADD_SERVICE';
  const REMOVE_SERVICE = 'REMOVE_SERVICE';
  const FETCH_SERVICES_REQUEST = 'FETCH_SERVICES_REQUEST';
  const FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS';
  const FETCH_SERVICES_FAILURE = 'FETCH_SERVICES_FAILURE';
  
  // Reducer function
  const servicesReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_SERVICE:
        return {
          ...state,
          services: [...state.services, action.payload] // Add new service to the state
        };
      case REMOVE_SERVICE:
        return {
          ...state,
          services: state.services.filter(service => service.id !== action.payload) // Remove service from the state by ID
        };
      case FETCH_SERVICES_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_SERVICES_SUCCESS:
        return {
          ...state,
          loading: false,
          services: action.payload // Update services with fetched data
        };
      case FETCH_SERVICES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload // Update error state with error message
        };
      default:
        return state;
    }
  };
  
  export default servicesReducer;
  