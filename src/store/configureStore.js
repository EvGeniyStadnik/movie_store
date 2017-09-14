import * as redux from 'redux';
import thunk from 'redux-thunk';

import { addMoviesReducer } from '../reducers/reducers';

export const configure = (initialState = {}) => {
  let reducer = redux.combineReducers({
    addMoviesReducer
  });

  let store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};










