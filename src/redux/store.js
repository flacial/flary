/* eslint-disable no-unused-vars */
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middleWare = [logger];

const store = createStore(rootReducer);

export default store;
