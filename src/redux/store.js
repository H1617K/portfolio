// store.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';// You may need to install this dependency
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;



// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );

// export default store;

// import { applyMiddleware, legacy_createStore } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';

// const store = legacy_createStore(
//   rootReducer,
//   applyMiddleware(thunk.default || thunk) // Adjust the applyMiddleware line
// );

// export default store; 

//import { applyMiddleware, legacy_createStore } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';

// const initialState = {};

// const middleware = [thunk];

// const store = legacy_createStore(
//   rootReducer,
//   initialState,
//   applyMiddleware(...middleware)
// );

// export default store;
