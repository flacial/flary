/* eslint-disable no-unused-vars */
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import wordsReducer from './words/words.reducer';

export default configureStore({
  reducer: {
    words: wordsReducer,
  },
  // devTools: false,
  // middleware: [logger],
});
