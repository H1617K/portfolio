// reducer.js
import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from './actions';
import { CloudComputingGuide, WebDevelopmentTrends, contentonwebsites, futureofmobiledevelopment } from '../Images/Images';

const initialState = {
  blogPosts: [{
    title: "Top Trends in Web Development",
    excerpt: "Explore the latest trends shaping the web development landscape in 2024.",
    imageUrl: WebDevelopmentTrends,
    link: "/blog/top-trends-in-web-development"
  },
  {
    title: "The Future of Mobile App Development",
    excerpt: "Discover what's in store for mobile app development and how it's evolving.",
    imageUrl: futureofmobiledevelopment,
    link: "/blog/future-of-mobile-app-development"
  },
  {
    title: "Cloud Computing: A Comprehensive Guide",
    excerpt: "Learn all about cloud computing, its benefits, and how to leverage it for your business.",
    imageUrl: CloudComputingGuide,
    link: "/blog/cloud-computing-comprehensive-guide"
  },
  {
    title: "How to make content on websites more effective",
    excerpt: "In the blogosphere nowadays Content Marketing is a popular topic. When it comes to Inbound Marketing, Content is still a hugely effective tool.",
    imageUrl: contentonwebsites,
    link: "https://forcewebtech.com/blog/how-to-make-content-on-websites-more-effective/"
  },],
  loading: false,
  error: null
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        blogPosts: action.payload,
        loading: false,
        error: null
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default blogReducer;


// // // In your redux store
// // const initialState = {
// //   posts: [],
// //   loading: false,
// //   error: null
// // };

// // //   // Define action types
// //   const ADD_POST = 'ADD_POST';
// //   const REMOVE_POST = 'REMOVE_POST';
// //   const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
// //   const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
// //   const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

// // const blogReducer = (state = initialState, action) => {
// //   switch (action.type) {
// //     case 'ADD-POST':
// //       return { ...state, posts: [...state.posts, action.payload] };
// //       case 'REMOVE_POST': 
// //         return {
// //           ...state,
// //           posts: state.posts.filter(post => post.id !== action.payload),
// //         };
// //     case 'FETCH_POSTS_REQUEST':
// //       return { ...state, loading: true };
// //     case 'FETCH_POSTS_SUCCESS':
// //       return { ...state, loading: false, posts: action.payload };
// //     case 'FETCH_POSTS_FAILURE':
// //       return { ...state, loading: false, error: action.payload };
// //     default:
// //       return state;
// //   }
// // };

// // export default blogReducer; 
// const initialState = {
//     posts: [], // Placeholder for blog posts data
//     loading: false,
//     error: null
//   };
  
//   // Define action types
//   const ADD_POST = 'ADD_POST';
//   const REMOVE_POST = 'REMOVE_POST';
//   const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
//   const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
//   const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
  
//   // Reducer function
//   const blogReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case ADD_POST:
//         return {
//           ...state,
//           posts: [...state.posts, action.payload] // Add new post to the state
//         };
//       case REMOVE_POST:
//         return {
//           ...state,
//           posts: state.posts.filter(post => post.id !== action.payload) // Remove post from the state by ID
//         };
//       case FETCH_POSTS_REQUEST:
//         return {
//           ...state,
//           loading: true,
//           error: null
//         };
//       case FETCH_POSTS_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           posts: action.payload // Update posts with fetched data
//         };
//       case FETCH_POSTS_FAILURE:
//         return {
//           ...state,
//           loading: false,
//           error: action.payload // Update error state with error message
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default blogReducer;  