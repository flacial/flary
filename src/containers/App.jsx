/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-labels */
/* eslint-disable no-restricted-syntax */

// TODO add react-swipeable

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
// import ThesaurusPage from '../pages/ThesaurusPage/ThesaurusPage';
import Routes from '../routes/routes';
import Header from '../components/header/header.component';
import {
  setWord,
  setWordArray,
  setNounArray,
  setAdjArray,
  setVerbArray,
  setPhraseArray,
  setAdverbArray,
  setAvailableWordType,
  resetAvailableWordType,
} from '../redux/words/words.action';
import ErrorBoundary from '../components/error-boundary/error-boundary.component';

const PopUpSearchBar = lazy(() => import('../components/popup-search-bar/popup-search-bar.component'));
const ThesaurusPage = lazy(() => import('../pages/ThesaurusPage/ThesaurusPage'));

const App = (props) => {
  const {
    location,
    Word,
    setWord,
    setWordArray,
    setNounArray,
    WordArray,
    setVerbArray,
    setAdjArray,
    setPhraseArray,
    setAdverbArray,
    AvailableWordType,
    setAvailableWordType,
    resetAvailableWordType,
  } = props;
  const [Error, setError] = useState(false);
  const PathName = location.pathname;
  const {
    isOpen,
    onOpen,
  } = useDisclosure();
  const [WordFind, setWordFind] = useState(false);
  const [WordFindType, setWordFindType] = useState('');
  const [WordsLoaded, setWordsLoaded] = useState(false);
  const [IsInitialDone, setInitialDone] = useState(false);

  // TODO Fix Repeated setState calls
  const setFilterArray = (wordObjects) => {
    if (AvailableWordType.noun) {
      const filteredArray = wordObjects.filter((word) => word.fl === 'noun');
      setNounArray(filteredArray[0]);
    }
    if (AvailableWordType.verb) {
      const filteredArray = wordObjects.filter((word) => word.fl === 'verb');
      setVerbArray(filteredArray[0]);
    }
    if (AvailableWordType.adjective) {
      const filteredArray = wordObjects.filter((word) => word.fl === 'adjective');
      setAdjArray(filteredArray[0]);
    }
    if (AvailableWordType.phrase) {
      const filteredArray = wordObjects.filter((word) => word.fl === 'phrase');
      setPhraseArray(filteredArray[0]);
    }
    if (AvailableWordType.adverb) {
      const filteredArray = wordObjects.filter((word) => word.fl === 'adverb');
      setAdverbArray(filteredArray[0]);
    }
  };

  useEffect(() => {
    if (IsInitialDone) {
      setFilterArray(WordArray);
    }
  }, [Object.keys(AvailableWordType)]);

  const PartOfSpeechChecker = (wordObjects) => {
    try {
      wordObjects.forEach((arr) => {
        switch (arr.fl) {
          case 'noun':
            setAvailableWordType({ type: 'noun', value: true });
            setInitialDone(true);
            setWordsLoaded(true);
            break;
          case 'verb':
            setAvailableWordType({ type: 'verb', value: true });
            setInitialDone(true);
            setWordsLoaded(true);
            break;
          case 'adjective':
            setAvailableWordType({ type: 'adjective', value: true });
            setInitialDone(true);
            setWordsLoaded(true);
            break;
          case 'phrase':
            setAvailableWordType({ type: 'phrase', value: true });
            setInitialDone(true);
            setWordsLoaded(true);
            break;
          case 'adverb':
            setAvailableWordType({ type: 'adverb', value: true });
            setInitialDone(true);
            setWordsLoaded(true);
            break;
          default:
            break;
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const PassRequstedWords = (wordObjects) => {
    try {
      if (wordObjects[0].hwi) {
        setWordArray(wordObjects);
        // InitialWord(wordObjects);
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
    if (isSetword) {
      setWord('');
    }
    setWordsLoaded(false);
    resetAvailableWordType();
    setNounArray([]);
    setVerbArray([]);
    setAdjArray([]);
    setPhraseArray([]);
    setAdverbArray([]);
    setWordArray([]);
  };

  // Sets AvailableWordType to an empty object
  useEffect(() => {
    if (PathName !== '/thesaurus' && Object.keys(AvailableWordType).length !== 0) {
      setAvailableWordType([]);
      HandleBackButtonClick();
    }
  }, [PathName]);
  // TODO convert Thesaurus compoennt to lazy one
  const ThesaurusStore = () => (
    <Suspense fallback={null}>
      <ThesaurusPage
        getWords={getWords}
        AvailableWordType={AvailableWordType}
        WordsLoaded={WordsLoaded}
        Link={Link}
        HandleBackButtonClick={HandleBackButtonClick}
      />
    </Suspense>
  );

  const Thesaurus = () => {
    let ThesaurusComponent;
    if (Word.length) {
      if (Error) {
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
    if (PathName !== '/thesaurus' && WordArray?.[0]?.fl?.length) {
      HandleBackButtonClick();
    }
  }, [PathName]);

  return (
    <>
      {(PathName === '/thesaurus' && WordsLoaded)
        ? (
          <ErrorBoundary>
            <Suspense fallback={null}>
              <PopUpSearchBar
                HandleBackButtonClick={HandleBackButtonClick}
                getWords={getWords}
                setWordsLoaded={setWordsLoaded}
              />
            </Suspense>
          </ErrorBoundary>
        )
        : <></>}
      <Header
        PathName={PathName}
        WordsLoaded={WordsLoaded}
      />
      <Routes
        getWords={getWords}
        Thesaurus={Thesaurus}
        WordFindType={WordFindType}
        WordFind={WordFind}
        isOpen={isOpen}
        HandleSearchButtonClick={HandleSearchButtonClick}
        Link={Link}
      />
    </>
  );
};

const mapStateToProps = ({ words }) => ({
  Word: words.Word,
  WordArray: words.WordArray,
  NounArray: words.NounArray,
  VerbArray: words.VerbArray,
  AdjArray: words.AdjArray,
  PhraseArray: words.PhraseArray,
  AdverbArray: words.AdverbArray,
  AvailableWordType: words.AvailableWordType,
});

const mapDispatchToProps = (dispatch) => ({
  setWord: (word) => dispatch(setWord(word)),
  setWordArray: (word) => dispatch(setWordArray(word)),
  setNounArray: (word) => dispatch(setNounArray(word)),
  setVerbArray: (word) => dispatch(setVerbArray(word)),
  setAdjArray: (word) => dispatch(setAdjArray(word)),
  setPhraseArray: (word) => dispatch(setPhraseArray(word)),
  setAdverbArray: (word) => dispatch(setAdverbArray(word)),
  setAvailableWordType: (word) => dispatch(setAvailableWordType(word)),
  resetAvailableWordType: () => dispatch(resetAvailableWordType()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
