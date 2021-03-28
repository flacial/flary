import { wordsChecksTypes } from './words-checks.types';

const INITIAL_STATE = {
  AvailableWordType: '',
};

const wordsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case wordsChecksTypes.SET_AVAILABLE_WORD:
      return {
        ...state,
        AvailableWordType: action.payload,
      };
    default:
      return state;
  }
};

export default wordsReducer;
