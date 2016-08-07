import { createStore, applyMiddleware } from 'redux';

export default function configureStore(rootReducer, initialState, middleware) {
  let enhancer = applyMiddleware(...middleware);

  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  );
  //
  //if (process.env.NODE_ENV === 'development') {
  //  module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers')));
  //}

  return store;
}
