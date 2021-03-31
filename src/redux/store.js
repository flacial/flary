/* eslint-disable no-unused-vars */
import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middleWare = [logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer);

export default store;
