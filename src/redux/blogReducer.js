const initialState = {
    posts: [], // Placeholder for blog posts data
    loading: false,
    error: null
  };
  
  // Define action types
  const ADD_POST = 'ADD_POST';
  const REMOVE_POST = 'REMOVE_POST';
  const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
  const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
  const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
  
  // Reducer function
  const blogReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_POST:
        return {
          ...state,
          posts: [...state.posts, action.payload] // Add new post to the state
        };
      case REMOVE_POST:
        return {
          ...state,
          posts: state.posts.filter(post => post.id !== action.payload) // Remove post from the state by ID
        };
      case FETCH_POSTS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_POSTS_SUCCESS:
        return {
          ...state,
          loading: false,
          posts: action.payload // Update posts with fetched data
        };
      case FETCH_POSTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload // Update error state with error message
        };
      default:
        return state;
    }
  };
  
  export default blogReducer;  