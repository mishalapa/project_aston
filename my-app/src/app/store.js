// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     registration: registrationReducer
//   },
// });

import { createStore, combineReducers } from 'redux'
import { registrationReducer } from './registrationReducer' 


const rootReducer = combineReducers({
	isRegistr: registrationReducer,
  
})


export const store = createStore(rootReducer)
