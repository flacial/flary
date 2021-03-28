/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-labels */
/* eslint-disable no-restricted-syntax */
import { connect } from 'react-redux';
import './App.css';
import {
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';
import {
  useState,
  useEffect,
  React,
  lazy,
  Suspense,
} from 'react';
import {
  useDisclosure,
} from '@chakra-ui/react';
import {
  Presets,
} from 'react-component-transition';
import getRequest from '../services/getRequest';
import ThesaurusPage from '../pages/ThesaurusPage/ThesaurusPage';
import Routes from '../routes/routes';
import NavBar from '../components/NavBar/NavBar';
import {
  setWord,
  setReturnedWord,
  setShortDef,
  setPartOfSpeech,
  setWordExample,
  setAnts,
  setSyns,
  setWordArray,
} from '../redux/words/words.action';
import ErrorBoundary from '../components/error-boundary/error-boundary.component';

const PopUpSearchBar = lazy(() => import('../components/popup-search-bar/popup-search-bar.component'));

const App = (props) => {
  const {
    location,
    Word,
    setWord,
    ReturnedWord,
    setReturnedWord,
    ShortDef,
    setShortDef,
    setPartOfSpeech,
    setWordExample,
    Ants,
    setAnts,
    Syns,
    setSyns,
    setWordArray,
  } = props;
  const [Error, setError] = useState(false);
  const PathName = location.pathname;
  const {
    isOpen,
    onOpen,
  } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
    onToggle: onToggle2,
  } = useDisclosure();
  const [WordFind, setWordFind] = useState(false);
  const [WordFindType, setWordFindType] = useState('');
  const [WordsLoaded, setWordsLoaded] = useState(false);
  const [AvailableWordType, setAvailableWordType] = useState({});

  // Used as a condition to render the values or skeleton in ThesaurusPage
  useEffect(() => {
    if (PathName === '/thesaurus' && !ShortDef.length) {
      setWordsLoaded(false);
    } else if (PathName === '/thesaurus' && ShortDef.length) {
      setWordsLoaded(true);
    }
  });

  const getInputValue = (event) => {
    setWord(event);
  };

  const WordsArrayFilter = (wordObjects, type) => {
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
            WordArraySetState(WordsArrayFilter(wordObjects, 'noun'));
            break MainLoop;
          }
        }
        // eslint-disable-next-line no-shadow
        for (let index = 0; index < wordObjects.length; index++) {
          const element = wordObjects[index];
          if (element.fl === 'verb') {
            WordArraySetState(WordsArrayFilter(wordObjects, 'verb'));
            break MainLoop;
          }
        }
        // eslint-disable-next-line no-shadow
        for (let index = 0; index < wordObjects.length; index++) {
          const element = wordObjects[index];
          if (element.fl === 'adjective') {
            WordArraySetState(WordsArrayFilter(wordObjects, 'adjective'));
            break MainLoop;
          }
        }
        // eslint-disable-next-line no-shadow
        for (let index = 0; index < wordObjects.length; index++) {
          const element = wordObjects[index];
          if (element.fl !== 'noun' && 'verb' && 'adjective') {
            WordArraySetState(WordsArrayFilter(wordObjects, element.fl));
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
      console.log(error);
      setError(true);
      setWordFind(true);
      onOpen();
    }
  };

  const getWords = (word = Word) => {
    if (word === '') {
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

  const HandleSearchButtonClick = () => {
    getWords();
  };

  const HandleBackButtonClick = (isSetword) => {
    setWordsLoaded(false);
    if (isSetword) {
      setWord('');
    }
    setReturnedWord('');
    setPartOfSpeech('');
    setShortDef('');
    setWordExample('');
    setSyns([]);
    setAnts([]);
    setAvailableWordType({});
  };

  // Sets AvailableWordType to an empty object
  useEffect(() => {
    if (PathName !== '/thesaurus' && Object.keys(AvailableWordType).length !== 0) {
      setAvailableWordType({});
      HandleBackButtonClick();
    }
  }, [PathName]);

  const ThesaurusStore = () => (
    <ThesaurusPage
      getWords={getWords}
      AvailableWordType={AvailableWordType}
      Ants={Ants}
      Syns={Syns}
      WordsLoaded={WordsLoaded}
      Link={Link}
      HandleBackButtonClick={HandleBackButtonClick}
    />
  );

  const Thesaurus = () => {
    let ThesaurusComponent;
    if (Word.length) {
      if (ReturnedWord.length) {
        ThesaurusComponent = (
          <Presets.TransitionFade>
            {ThesaurusStore()}
          </Presets.TransitionFade>
        );
      } else if (Error) {
        ThesaurusComponent = <Redirect to="/" />;
      } else {
        ThesaurusComponent = (
          <Presets.TransitionFade>
            {ThesaurusStore()}
          </Presets.TransitionFade>
        );
      }
    } else {
      ThesaurusComponent = <Redirect to="/" />;
    }
    useEffect(() => {
      if (Error) {
        setWord('');
        setError(false);
      }
    }, [Error]);
    return ThesaurusComponent;
  };

  // Clear all stored states if the pathName is not thesaurus
  useEffect(() => {
    if (PathName !== '/thesaurus' && ShortDef.length) {
      HandleBackButtonClick();
    }
  }, [PathName]);

  return (
    <>
      {(PathName === '/thesaurus' && ReturnedWord.length)
        ? (
          <ErrorBoundary>
            <Suspense fallback={null}>
              <PopUpSearchBar
                isOpen2={isOpen2}
                onOpen2={onOpen2}
                onClose2={onClose2}
                onToggle2={onToggle2}
                HandleBackButtonClick={HandleBackButtonClick}
                getInputValue={getInputValue}
                getWords={getWords}
                setWordsLoaded={setWordsLoaded}
              />
            </Suspense>
          </ErrorBoundary>
        )
        : <></>}
      <NavBar
        PathName={PathName}
        onOpen2={onOpen2}
      />
      <Routes
        getWords={getWords}
        Thesaurus={Thesaurus}
        WordFindType={WordFindType}
        WordFind={WordFind}
        isOpen={isOpen}
        getInputValue={getInputValue}
        HandleSearchButtonClick={HandleSearchButtonClick}
        Link={Link}
      />
    </>
  );
};

const mapStateToProps = ({ words }) => ({
  Word: words.Word,
  ReturnedWord: words.ReturnedWord,
  ShortDef: words.ShortDef,
  PartOfSpeech: words.PartOfSpeech,
  WordExample: words.WordExample,
  Syns: words.Syns,
  Ants: words.Ants,
  WordArray: words.WordArray,
});

const mapDispatchToProps = (dispatch) => ({
  // eslint-disable-next-line no-undef
  setWord: (word) => dispatch(setWord(word)),
  setReturnedWord: (word) => dispatch(setReturnedWord(word)),
  setShortDef: (word) => dispatch(setShortDef(word)),
  setPartOfSpeech: (word) => dispatch(setPartOfSpeech(word)),
  setWordExample: (word) => dispatch(setWordExample(word)),
  setAnts: (word) => dispatch(setAnts(word)),
  setSyns: (word) => dispatch(setSyns(word)),
  setWordArray: (word) => dispatch(setWordArray(word)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
