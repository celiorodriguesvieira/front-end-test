import { combineReducers, compose, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { cartReducer } from './cart';

const rootReducer = combineReducers({
  form: formReducer,
  cart: cartReducer,
});

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(rootReducer, composeEnhancers());

export default store;
