/* eslint-disable import/prefer-default-export */
import { wordsTypes } from './words.types';

export const setAvailableWordType = (word) => ({
  type: wordsTypes.SET_AVAILABLE_WORD_TYPES,
  // eslint-disable-next-line object-shorthand
  payload: {
    [word.type]: word.value,
  },
});

export const resetAvailableWordType = () => ({
  type: wordsTypes.RESET_AVAILABLE_WORD_TYPES,
});

export const onOpenSearchBar = () => ({
  type: wordsTypes.ON_OPEN_SEARCHBAR,
});

export const onToggleSearchBar = () => ({
  type: wordsTypes.ON_TOGGLE_SEARCHBAR,
});

export const onCloseSearchBar = () => ({
  type: wordsTypes.ON_CLOSE_SEARCHBAR,
});

export const setPhraseArray = (word) => ({
  type: wordsTypes.SET_PHRASE_ARRAY,
  payload: word,
});

export const setAdverbArray = (word) => ({
  type: wordsTypes.SET_ADVERB_ARRAY,
  payload: word,
});

export const setNounArray = (word) => ({
  type: wordsTypes.SET_NOUN_ARRAY,
  payload: word,
});

export const setVerbArray = (word) => ({
  type: wordsTypes.SET_VERB_ARRAY,
  payload: word,
});

export const setAdjArray = (word) => ({
  type: wordsTypes.SET_ADJ_ARRAY,
  payload: word,
});

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
