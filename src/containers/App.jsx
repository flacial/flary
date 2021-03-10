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
import ThesaurusPage from '../pages/ThesaurusPage/ThesaurusPage';
import Routes from '../Routes/Routes';
import NavBar from '../pages/NavBar/NavBar';
// import Help from '../components/help/help.component';

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

  const WordArrayFilter = (wordObjects, type) => {
    const filteredArray = wordObjects.filter((word) => word.fl === type);
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
    const Example = dt[0][0][1].dt?.[1]?.[1]?.[0].t ?? dt[0][0][1].dt[0][1];
    const ExampleModified = Example.replace('{it}', '<em>').replace('{/it}', '</em>');
    setAnts(ants[0]);
    setSyns(syns[0]);
    setReturnedWord(hw);
    setPartOfSpeech(fl);
    setShortDef(shortdef[0]);
    setWordExample(ExampleModified);
  };

  const PartOfSpeechChecker = (wordObjects) => {
    try {
      wordObjects.forEach((arr) => {
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
    } catch (error) {
      console.log(error);
    }
  };

  const InitialWord = (wordObjects) => {
    try {
      MainLoop:
      for (let index = 0; index < 4; index++) {
        // eslint-disable-next-line no-shadow
        for (let index = 0; index < wordObjects.length; index++) {
          const element = wordObjects[index];
          if (element.fl === 'noun') {
            WordArraySetState(WordArrayFilter(wordObjects, 'noun'));
            setIsNounFound(true);
            break MainLoop;
          }
        }
        // eslint-disable-next-line no-shadow
        for (let index = 0; index < wordObjects.length; index++) {
          const element = wordObjects[index];
          if (element.fl === 'verb' && !isNounFound) {
            WordArraySetState(WordArrayFilter(wordObjects, 'verb'));
            break MainLoop;
          }
        }
        // eslint-disable-next-line no-shadow
        for (let index = 0; index < wordObjects.length; index++) {
          const element = wordObjects[index];
          if (element.fl === 'adjective' && !isNounFound) {
            WordArraySetState(WordArrayFilter(wordObjects, 'adjective'));
            break MainLoop;
          }
        }
        // eslint-disable-next-line no-shadow
        for (let index = 0; index < wordObjects.length; index++) {
          const element = wordObjects[index];
          if (element.fl !== 'noun' && 'verb' && 'adjective' && !isNounFound) {
            WordArraySetState(WordArrayFilter(wordObjects, element.fl));
            break MainLoop;
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const PassRequstedWords = (wordObjects) => {
    try {
      if (wordObjects[0].hwi) {
        setWordArray(wordObjects);
        InitialWord(wordObjects);
        PartOfSpeechChecker(wordObjects);
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

  const getWords = (word = Word) => {
    if (Word === '') {
      setWordFind(true);
      setWordFindType('no input');
      onOpen();
    } else {
      getRequest(word)
        .then((data) => PassRequstedWords(data));
      setWordFind(false);
      setWordFindType('');
    }
  };

  const HandleSynAntClick = (word) => {
    setWord(word);
  };

  const HandleSearchButtonClick = () => {
    getWords();
  };

  const HandleBackButtonClick = () => {
    setWordsLoaded(false);
    setWord('');
    setReturnedWord('');
    setPartOfSpeech('');
    setShortDef('');
    setWordExample('');
    setSyns([]);
    setAnts([]);
    setAvailableWordType({});
  };

  useEffect(() => {
    if (PathName !== '/thesaurus' && Object.keys(AvailableWordType).length !== 0) {
      setAvailableWordType({});
      HandleBackButtonClick();
    }
  }, [PathName]);

  const HandleTabClick = (type) => {
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
      HandleSynAntClick={HandleSynAntClick}
      getWords={getWords}
      AvailableWordType={AvailableWordType}
      HandleTabClick={HandleTabClick}
      PathName={PathName}
      Ants={Ants}
      Syns={Syns}
      WordsLoaded={WordsLoaded}
      Word={Word}
      Link={Link}
      HandleBackButtonClick={HandleBackButtonClick}
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

  const HandleEnterKey = (event) => {
    if (event.which === 13) {
      getWords();
      history.push('/thesaurus');
    }
  };

  useEffect(() => {
    if (PathName !== '/thesaurus' && ShortDef.length) {
      HandleBackButtonClick();
    }
  }, [PathName]);

  return (
    <>
      <NavBar />
      <Routes
        ThesaurusPageComponent={ThesaurusPageComponent}
        WordFindType={WordFindType}
        HandleEnterKey={HandleEnterKey}
        WordFind={WordFind}
        isOpen={isOpen}
        getInputValue={getInputValue}
        HandleSearchButtonClick={HandleSearchButtonClick}
        Link={Link}
        getPathName={getPathName}
      />
      {/* <Help /> */}
    </>
  );
};

export default App;
