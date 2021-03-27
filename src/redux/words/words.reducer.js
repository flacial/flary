import { wordsTypes } from './words.types';

// const [Error, setError] = useState(false);
// const PathName = location.pathname;
// const {
//   isOpen,
//   onOpen,
// } = useDisclosure();
// const {
//   isOpen: isOpen2,
//   onOpen: onOpen2,
//   onClose: onClose2,
//   onToggle: onToggle2,
// } = useDisclosure();
// const [WordFind, setWordFind] = useState(false);
// const [WordFindType, setWordFindType] = useState('');
// const [WordsLoaded, setWordsLoaded] = useState(false);
// const [WordArray, setWordArray] = useState([]);
// const [AvailableWordType, setAvailableWordType] = useState({});

const INITIAL_STATE = {
  Word: '',
  ReturnedWord: '',
  ShortDef: '',
  PartOfSpeech: '',
  WordExample: '',
  Syns: [],
  Ants: [],
  WordArray: [],
};

const wordsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
