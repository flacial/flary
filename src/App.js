import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser';
import { useState, useEffect, useRef, Fragment } from 'react';
import { getRequest } from './components/RequestPage/Functions/getRequest/getRequest';
import SearchPage from './components/RequestPage/SearchPage/SearchPage';
import { ThesaurusPage } from './components/ResponsePage/ThesaurusPage/ThesaurusPage';
import { LoadingPage } from './components/ResponsePage/Loading/Loading';
import { useDisclosure } from '@chakra-ui/react'
import { ComponentTransition, AnimationTypes } from "react-component-transition";

const  App = () => {
  const [ Word, setWord ] = useState('')
  const [ ReturnedWord, setReturnedWord] = useState('')
  const [ ShortDef, setShortDef ] = useState('')
  const [ PartOfSpeech, setPartOfSpeech ] = useState('')
  const [ WordExample, setWordExample ] = useState('')
  const [ Error, setError ] = useState(false)
  const [ PathName, setPathName ] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
  const [ WordFind, setWordFind ] = useState(false)
  const [ WordFindType ,setWordFindType ] = useState('')

  const location = useLocation();

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
    .then(response => sendRequstedWord(response))
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
  }

  const RequestedThesaurus = (word, index) => {
    const { fl, hwi: {hw},  shortdef , def: [{sseq: dt}] } = word[index]
    const WordExample = dt[0][0][1].dt[1][1][0].t
    const WordExampleSlicedIt = WordExample.replace('{it}', '<em>').replace('{/it}', '</em>')
    setReturnedWord(hw)
    setPartOfSpeech(fl)
    setShortDef(shortdef[0])
    setWordExample(WordExampleSlicedIt)
  }

  const sendRequstedWord = (word) => {
    try {
          if (word.length >= 1) {
            RequestedThesaurus(word, 0)
          } else if (!word[0]) {
            setError(true)
            setWordFind(true)
            setWordFindType('no response')
          }
    }
    catch (error) {
      console.log(error)
      setError(true)
      onOpen()
        }
  }

  const ThesaurusPageComponent = () => {
    let ThesaurusPageCondition;
    if (Word.length) {
        if (ReturnedWord.length) {
            ThesaurusPageCondition = <ThesaurusPage Word={Word} Link={Link} BackButtonClick={BackButtonClick} ReturnedWord={ReturnedWord} PartOfSpeech={PartOfSpeech} ShortDef={ShortDef}
            ReactHtmlParser={ReactHtmlParser} WordExample={WordExample} getPathName={getPathName}/>
        } else if (Error) {
          setWord('')
          setError(false)
          ThesaurusPageCondition = <Redirect to='/' />
        } else {
          ThesaurusPageCondition = <LoadingPage/>
        }
  } else {
    ThesaurusPageCondition = <Redirect to='/' />
  }
  if (WordFind) {
    if (PathName !== '/') {
      setWordFind(false)
      setWordFindType('')
    }
  }
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
    <ComponentTransition
    enterAnimation={AnimationTypes.fade.enter}
    exitAnimation={AnimationTypes.fade.exit}
>
      <Switch key={location.key} location={location} >
          <Route exact path='/'>
            <SearchPage WordFindType={WordFindType} onEnterKeyPress={onEnterKeyPress} WordFind={WordFind} isOpen={isOpen} onClose={onClose} cancelRef={cancelRef} getInputValue={getInputValue} getButtonClick={getButtonClick} Link={Link} getPathName={getPathName} />
          </Route>
          <Route exact path='/thesaurus'>
          {ThesaurusPageComponent()}
          </Route>
      </Switch>
    </ComponentTransition>
)
}

export default App;