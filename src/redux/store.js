import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxReducerStore from './reducers/ReduxReducer';
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
  reduxReducerStore
});

const middleWare = [thunk];

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(middleWare));
}

export default configureStore;
