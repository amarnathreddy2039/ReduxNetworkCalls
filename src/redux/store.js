    
import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';


import reduxReducer from './reducers/ReduxReducer';


const AppReducers = combineReducers({
  reduxReducer,
});

const rootReducer = (state, action) => {
return AppReducers(state,action);
}

const logger = createLogger();

let store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;


// export const rootReducer = combineReducers({
//   reduxReducerStore
// });

// const middleWare = [thunk];

// const configureStore = () => {
//   return createStore(rootReducer, applyMiddleware(middleWare));
// }

// export default configureStore;
