const initialState = {
    products: [], // Placeholder for products data
    loading: false,
    error: null
  };
  
  // Define action types
  const ADD_PRODUCT = 'ADD_PRODUCT';
  const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
  const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
  const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
  const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
  
  // Reducer function
  const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PRODUCT:
        return {
          ...state,
          products: [...state.products, action.payload] // Add new product to the state
        };
      case REMOVE_PRODUCT:
        return {
          ...state,
          products: state.products.filter(product => product.id !== action.payload) // Remove product from the state by ID
        };
      case FETCH_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          loading: false,
          products: action.payload // Update products with fetched data
        };
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload // Update error state with error message
        };
      default:
        return state;
    }
  };
  
  export default productsReducer;  