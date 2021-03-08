/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-labels */
/* eslint-disable no-restricted-syntax */
import './App.css';
import {
  Link,
  Redirect,
  useHistory,
} from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import {
  useState,
  useEffect,
  React,
} from 'react';
import {
  useDisclosure,
} from '@chakra-ui/react';
import {
  Presets,
} from 'react-component-transition';
import getRequest from '../services/getRequest';
import ThesaurusPage from '../components/ResponsePage/ThesaurusPage/ThesaurusPage';
import Routes from '../Routes/Routes';

// TODO understand wth is your state doing
// TODO add a way to double click a word on ThesaurusPage and then it searches for it

const App = () => {
  const [Word, setWord] = useState('');
  const [ReturnedWord, setReturnedWord] = useState('');
  const [ShortDef, setShortDef] = useState('');
  const [PartOfSpeech, setPartOfSpeech] = useState('');
  const [WordExample, setWordExample] = useState('');
  const [Error, setError] = useState(false);
  const [PathName, setPathName] = useState('');
  const {
    isOpen,
    onOpen,
  } = useDisclosure();
  const [WordFind, setWordFind] = useState(false);
  const [WordFindType, setWordFindType] = useState('');
  const [WordsLoaded, setWordsLoaded] = useState(false);
  const [Syns, setSyns] = useState([]);
  const [Ants, setAnts] = useState([]);
  const [WordArray, setWordArray] = useState([]);
  const [AvailableWordType, setAvailableWordType] = useState({});
  const [isNounFound, setIsNounFound] = useState(false);
  const history = useHistory();

  // Used as a condition to render the values or skeleton in ThesaurusPage
  useEffect(() => {
    if (PathName === '/thesaurus' && !ShortDef.length) {
      setWordsLoaded(false);
    } else if (PathName === '/thesaurus' && ShortDef.length) {
      setWordsLoaded(true);
    }
  });

  const getInputValue = (event) => {
    setWord(event.target.value);
  };

  const WordArrayFilter = (word, type) => {
    const filteredArray = word.filter((arr) => arr.fl === type);
    return filteredArray[0];
  };

  const WordArraySetState = (wordArray) => {
    const {
      fl,
      hwi: {
        hw,
      },
      shortdef,
      def: [{
        sseq: dt,
      }],
      meta: {
        syns,
      },
      meta: {
        ants,
      },
    } = wordArray;
    const WordExampleForState = dt[0][0][1].dt?.[1]?.[1]?.[0].t ?? dt[0][0][1].dt[0][1];
    const WordExampleSlicedIt = WordExampleForState.replace('{it}', '<em>').replace('{/it}', '</em>');
    setAnts(ants[0]);
    setSyns(syns[0]);
    setReturnedWord(hw);
    setPartOfSpeech(fl);
    setShortDef(shortdef[0]);
    setWordExample(WordExampleSlicedIt);
  };

  const RequestedThesaurus = (word) => {
    try {
      setWordArray(word);
      word.forEach((arr) => {
        switch (arr.fl) {
          case 'noun':
            setAvailableWordType((prevState) => ({ ...prevState, noun: true }));
            break;
          case 'verb':
            setAvailableWordType((prevState) => ({ ...prevState, verb: true }));
            break;
          case 'adjective':
            setAvailableWordType((prevState) => ({ ...prevState, adjective: true }));
            break;
          default:
            break;
        }
      });
      MainLoop:
      for (let index = 0; index < 4; index++) {
        // eslint-disable-next-line no-shadow
        for (let index = 0; index < word.length; index++) {
          const element = word[index];
          if (element.fl === 'noun') {
            WordArraySetState(WordArrayFilter(word, 'noun'));
            setIsNounFound(true);
            break MainLoop;
          }
        }
        // eslint-disable-next-line no-shadow
        for (let index = 0; index < word.length; index++) {
          const element = word[index];
          if (element.fl === 'verb' && !isNounFound) {
            WordArraySetState(WordArrayFilter(word, 'verb'));
            break MainLoop;
          }
        }
        // eslint-disable-next-line no-shadow
        for (let index = 0; index < word.length; index++) {
          const element = word[index];
          if (element.fl === 'adjective' && !isNounFound) {
            WordArraySetState(WordArrayFilter(word, 'adjective'));
            break MainLoop;
          }
        }
        // eslint-disable-next-line no-shadow
        for (let index = 0; index < word.length; index++) {
          const element = word[index];
          if (element.fl !== 'noun' && 'verb' && 'adjective' && !isNounFound) {
            WordArraySetState(WordArrayFilter(word, element.fl));
            break MainLoop;
          }
        }
      }
    } catch (error) {
      // console.log(error);
    }
  };

  const sendRequstedWord = (word) => {
    try {
      if (word[0].hwi) {
        RequestedThesaurus(word);
      } else {
        setError(true);
        setWordFind(true);
        setWordFindType('no response');
        onOpen();
      }
    } catch (error) {
      setError(true);
      setWordFind(true);
      onOpen();
    }
  };

  const getWords = () => {
    if (Word === '') {
      setWordFind(true);
      setWordFindType('no input');
      onOpen();
    } else {
      getRequest(Word)
        .then((data) => sendRequstedWord(data));
      setWordFind(false);
      setWordFindType('');
    }
  };

  const getButtonClick = () => {
    getWords();
  };

  const BackButtonClick = () => {
    setWord('');
    setReturnedWord('');
    setPartOfSpeech('');
    setShortDef('');
    setWordExample('');
    setSyns([]);
    setAnts([]);
    setWordsLoaded(false);
  };

  useEffect(() => {
    if (PathName !== '/thesaurus' && Object.keys(AvailableWordType).length !== 0) {
      setAvailableWordType({});
      BackButtonClick();
    }
  }, [PathName]);

  const onTabClick = (type) => {
    switch (type) {
      case 'verb':
        WordArraySetState(WordArrayFilter(WordArray, 'verb'));
        break;
      case 'noun':
        WordArraySetState(WordArrayFilter(WordArray, 'noun'));
        break;
      case 'adjective':
        WordArraySetState(WordArrayFilter(WordArray, 'adjective'));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (PathName !== '/thesaurus' && isNounFound) {
      setIsNounFound(false);
    }
  }, [PathName]);

  const getPathName = (Path) => {
    setPathName(Path);
  };

  const ThesaurusPageFunc = () => (
    <ThesaurusPage
      AvailableWordType={AvailableWordType}
      onTabClick={onTabClick}
      PathName={PathName}
      Ants={Ants}
      Syns={Syns}
      WordsLoaded={WordsLoaded}
      Word={Word}
      Link={Link}
      BackButtonClick={BackButtonClick}
      ReturnedWord={ReturnedWord}
      PartOfSpeech={PartOfSpeech}
      ShortDef={ShortDef}
      ReactHtmlParser={ReactHtmlParser}
      WordExample={WordExample}
      getPathName={getPathName}
    />
  );

  const ThesaurusPageComponent = () => {
    let ThesaurusPageCondition;
    if (Word.length) {
      if (ReturnedWord.length) {
        ThesaurusPageCondition = (
          <Presets.TransitionFade>
            {ThesaurusPageFunc()}
          </Presets.TransitionFade>
        );
      } else if (Error) {
        ThesaurusPageCondition = <Redirect to="/" />;
      } else {
        ThesaurusPageCondition = (
          <Presets.TransitionFade>
            {ThesaurusPageFunc()}
          </Presets.TransitionFade>
        );
      }
    } else {
      ThesaurusPageCondition = <Redirect to="/" />;
    }
    useEffect(() => {
      if (Error) {
        setWord('');
        setError(false);
      }
    }, [Error]);
    return ThesaurusPageCondition;
  };

  const onEnterKeyPress = (event) => {
    if (event.which === 13) {
      getWords();
      history.push('/thesaurus');
    }
  };

  // TODO Add keyboard shortcuts

  // const onCtrlShiftSpace = (event) => {
  //   if (event.which === 30) {
  //   }
  // };

  useEffect(() => {
    if (PathName !== '/thesaurus' && ShortDef.length) {
      BackButtonClick();
    }
  }, [PathName]);

  return (
    <Routes
      ThesaurusPageComponent={ThesaurusPageComponent}
      WordFindType={WordFindType}
      onEnterKeyPress={onEnterKeyPress}
      WordFind={WordFind}
      isOpen={isOpen}
      getInputValue={getInputValue}
      getButtonClick={getButtonClick}
      Link={Link}
      getPathName={getPathName}
    />
  );
};

export default App;
