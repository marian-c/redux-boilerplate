import { combineReducers } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import { browserHistory } from 'react-router';

// store & reducers
import initialState from './state';
import reducers from './reducers';
import configureStore from './configureStore';

const rootReducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

const middleware = [thunkMiddleware, routerMiddleware(browserHistory)];
const store = configureStore(rootReducer, initialState, middleware);

export default store;
