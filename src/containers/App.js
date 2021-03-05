import './App.css';
import {
  Link, 
  Redirect,
  useHistory
} from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser';
import { useState, useEffect } from 'react';
import { getRequest } from '../services/getRequest';
import { ThesaurusPage } from '../components/ResponsePage/ThesaurusPage/ThesaurusPage';
import { useDisclosure } from '@chakra-ui/react';
import { Presets } from "react-component-transition";
import Routes from '../Routes/Routes';

const  App = () => {
  const [ Word, setWord ] = useState('')
  const [ ReturnedWord, setReturnedWord] = useState('')
  const [ ShortDef, setShortDef ] = useState('')
  const [ PartOfSpeech, setPartOfSpeech ] = useState('')
  const [ WordExample, setWordExample ] = useState('')
  const [ Error, setError ] = useState(false)
  const [ PathName, setPathName ] = useState('')
  const { isOpen, onOpen } = useDisclosure()
  const [ WordFind, setWordFind ] = useState(false)
  const [ WordFindType ,setWordFindType ] = useState('')
  const [ WordsLoaded, setWordsLoaded ] = useState(false)
  const [ Syns, setSyns ] = useState([])
  const [ Ants, setAnts ] = useState([])
  const [ WordArray, setWordArray ] = useState([])
  const [ AvailableWordType , setAvailableWordType ] = useState({})

  useEffect(() => {
    if (PathName === '/thesaurus' && ShortDef === '') {
      setWordsLoaded(false)
    } else if (PathName === '/thesaurus' && !(ShortDef === '')) {
      setWordsLoaded(true)
    }
  })
  const history = useHistory();
  
  const getInputValue = (event) => {
    setWord(event.target.value)
  }
  
  const getWords = () => {
    if (Word === '') {
      setWordFind(true)
      setWordFindType('no input')
          onOpen()
        } else {
    getRequest(Word)
    .then(data => sendRequstedWord(data))
    setWordFind(false)
    setWordFindType('')
        }
  }

  const getButtonClick = () => {
    getWords()
  }

  const BackButtonClick = () => {
    setWord('')
    setReturnedWord('')
    setPartOfSpeech('')
    setShortDef('')
    setWordExample('')
    setSyns([])
    setAnts([])
    setWordsLoaded(false)
  }

  useEffect(() => {
    if (PathName === '/' && AvailableWordType !== {}) {
      setAvailableWordType({})
      BackButtonClick()
    }
  }, [PathName])

  const WordArrayFilter = (word, type) => {
    const filteredArray = word.filter((arr) => arr.fl === type)
    return filteredArray[0]
  }

  const WordArraySetState = (wordArray) => {
    const { fl, hwi: {hw},  shortdef , def: [{sseq: dt}], meta: {syns}, meta: {ants} } = wordArray
    const WordExample = dt[0][0][1].dt?.[1]?.[1]?.[0].t ?? dt[0][0][1].dt[0][1]
    const WordExampleSlicedIt = WordExample.replace('{it}', '<em>').replace('{/it}', '</em>')
    setAnts(ants[0])
    setSyns(syns[0])
    setReturnedWord(hw)
    setPartOfSpeech(fl)
    setShortDef(shortdef[0])
    setWordExample(WordExampleSlicedIt)
  }

  const onTabClick = (type) => {
    switch (type) {
      case 'verb':
        WordArraySetState(WordArrayFilter(WordArray, 'verb'))
        break;
      case 'noun':
        WordArraySetState(WordArrayFilter(WordArray, 'noun'))
        break;
      case 'adjective':
        WordArraySetState(WordArrayFilter(WordArray, 'adjective'))
        break;
      default:
        break;
    }
  }



  const RequestedThesaurus = (word) => {
    try {
      setWordArray(word)
      word.forEach((arr, index) => {
      switch (arr.fl) {
        case 'noun':
          // WordArraySetState(WordArrayFilter(word, 'noun'))
          setAvailableWordType(prevState => Object.assign({}, prevState, {noun: true }))
          break;
        case 'verb':
          // WordArraySetState(WordArrayFilter(word, 'verb'))
          setAvailableWordType(prevState => Object.assign({}, prevState, {verb: true }))
          break;
        case 'adjective':
          // WordArraySetState(WordArrayFilter(word, 'adjective'))
          setAvailableWordType(prevState => Object.assign({}, prevState, {adjective: true }))
          break;
        default:
          break;
      }
      if (arr.fl === 'noun') {
        WordArraySetState(WordArrayFilter(word, 'noun'))
      } else if (word[index - 1] !== undefined) {
        if (word[index - 1].fl === 'noun') {
          WordArraySetState(WordArrayFilter(word, 'noun'))
        }
      } else {
        WordArraySetState(WordArrayFilter(word, arr.fl))
      }
    });
    }
    catch (error) {
      console.log(error)
    }
  }

  const getWordArrayReq = (word) => {
    return word
  }

  const sendRequstedWord = (word) => {
    try {
          if (word[0].hwi) {
            RequestedThesaurus(word)
            getWordArrayReq(word)
          } else {
            setError(true)
            setWordFind(true)
            setWordFindType('no response')
            onOpen()
          }
    }
    catch (error) {
        setError(true)
        setWordFind(true)
        onOpen()
        }
  }
  
  const ThesaurusPageComponent = () => {
    let ThesaurusPageCondition;
    if (Word.length) {
        if (ReturnedWord.length) {
            ThesaurusPageCondition = <Presets.TransitionFade><ThesaurusPage AvailableWordType={AvailableWordType} onTabClick={onTabClick} PathName={PathName} Ants={Ants} Syns={Syns} WordsLoaded={WordsLoaded} Word={Word} Link={Link} BackButtonClick={BackButtonClick} ReturnedWord={ReturnedWord} PartOfSpeech={PartOfSpeech} ShortDef={ShortDef}
            ReactHtmlParser={ReactHtmlParser} WordExample={WordExample} getPathName={getPathName}/></Presets.TransitionFade>
        } else if (Error) {
          ThesaurusPageCondition = <Redirect to='/' />
        } else {
          ThesaurusPageCondition = <Presets.TransitionFade><ThesaurusPage AvailableWordType={AvailableWordType} onTabClick={onTabClick} PathName={PathName} Ants={Ants} Syns={Syns} WordsLoaded={WordsLoaded} Word={Word} Link={Link} BackButtonClick={BackButtonClick} ReturnedWord={ReturnedWord} PartOfSpeech={PartOfSpeech} ShortDef={ShortDef}
          ReactHtmlParser={ReactHtmlParser} WordExample={WordExample} getPathName={getPathName}/></Presets.TransitionFade>
        }
  } else {
    ThesaurusPageCondition = <Redirect to='/' />
  }
  useEffect(() => {
    if (Error) {
    setWord('')
    setError(false)
    }
  }, [Error])
    return ThesaurusPageCondition
  }

  const getPathName = (Path) => {
    setPathName(Path)
  }

  const onEnterKeyPress = (event) => {
    if (event.which === 13) {
      getWords()
      history.push('/thesaurus')
    }
  }

  useEffect(() => {
    if (PathName === '/' && ShortDef.length) {
      BackButtonClick()
    }
  }, [PathName])

  
  return (
      <Routes ThesaurusPageComponent={ThesaurusPageComponent} WordFindType={WordFindType}
       onEnterKeyPress={onEnterKeyPress} WordFind={WordFind} 
       isOpen={isOpen} getInputValue={getInputValue} getButtonClick={getButtonClick} Link={Link} getPathName={getPathName}/>
  )
}

export default App;