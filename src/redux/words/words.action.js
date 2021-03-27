/* eslint-disable import/prefer-default-export */
import { wordsTypes } from './words.types';

export const setWord = (word) => ({
  type: wordsTypes.SET_WORD,
  payload: word,
});

export const setReturnedWord = (word) => ({
  type: wordsTypes.SET_RETURNED_WORD,
  payload: word,
});

export const setShortDef = (word) => ({
  type: wordsTypes.SET_SHORTDEF,
  payload: word,
});

export const setPartOfSpeech = (word) => ({
  type: wordsTypes.SET_PART_OF_SPEECH,
  payload: word,
});

export const setWordExample = (word) => ({
  type: wordsTypes.SET_WORD_EXAMPLE,
  payload: word,
});

export const setAnts = (word) => ({
  type: wordsTypes.SET_ANTS,
  payload: word,
});

export const setSyns = (word) => ({
  type: wordsTypes.SET_SYNS,
  payload: word,
});

export const setWordArray = (word) => ({
  type: wordsTypes.SET_WORD_ARRAY,
  payload: word,
});
