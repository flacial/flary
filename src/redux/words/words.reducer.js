import { wordsTypes } from './words.types';

const INITIAL_STATE = {
  Word: '',
  ReturnedWord: '',
  ShortDef: '',
  PartOfSpeech: '',
  WordExample: '',
  Syns: [],
  Ants: [],
  WordArray: [],
  NounArray: [],
  VerbArray: [],
  AdjArray: [],
  PhraseArray: [],
  AdverbArray: [],
  AvailableWordType: [],
  isOpenSearchBar: false,
  isCloseSearchBar: true,
};

const wordsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case wordsTypes.ON_OPEN_SEARCHBAR:
      return {
        ...state,
        isOpenSearchBar: true,
        isCloseSearchBar: false,
      };

    case wordsTypes.ON_CLOSE_SEARCHBAR:
      return {
        ...state,
        isOpenSearchBar: false,
        isCloseSearchBar: true,
      };

    case wordsTypes.ON_TOGGLE_SEARCHBAR:
      return {
        ...state,
        isOpenSearchBar: !state.isOpenSearchBar,
        isCloseSearchBar: !state.isCloseSearchBar,
      };

    case wordsTypes.SET_NOUN_ARRAY:
      return {
        ...state,
        NounArray: action.payload,
      };
    case wordsTypes.SET_AVAILABLE_WORD_TYPES:
      return {
        ...state,
        AvailableWordType: {
          ...state.AvailableWordType,
          [Object.keys(action.payload)[0]]: [Object.values(action.payload)[0]],
        },
      };
    case wordsTypes.RESET_AVAILABLE_WORD_TYPES:
      return {
        ...state,
        AvailableWordType: [],
      };
    case wordsTypes.SET_ADVERB_ARRAY:
      return {
        ...state,
        AdverbArray: action.payload,
      };
    case wordsTypes.SET_PHRASE_ARRAY:
      return {
        ...state,
        PhraseArray: action.payload,
      };
    case wordsTypes.SET_VERB_ARRAY:
      return {
        ...state,
        VerbArray: action.payload,
      };
    case wordsTypes.SET_ADJ_ARRAY:
      return {
        ...state,
        AdjArray: action.payload,
      };
    case wordsTypes.SET_WORD:
      return {
        ...state,
        Word: action.payload,
      };
    case wordsTypes.SET_RETURNED_WORD:
      return {
        ...state,
        ReturnedWord: action.payload,
      };
    case wordsTypes.SET_SHORTDEF:
      return {
        ...state,
        ShortDef: action.payload,
      };
    case wordsTypes.SET_PART_OF_SPEECH:
      return {
        ...state,
        PartOfSpeech: action.payload,
      };
    case wordsTypes.SET_WORD_EXAMPLE:
      return {
        ...state,
        WordExample: action.payload,
      };
    case wordsTypes.SET_SYNS:
      return {
        ...state,
        Syns: action.payload,
      };
    case wordsTypes.SET_ANTS:
      return {
        ...state,
        Ants: action.payload,
      };
    case wordsTypes.SET_WORD_ARRAY:
      return {
        ...state,
        WordArray: action.payload,
      };
    default:
      return state;
  }
};

export default wordsReducer;
