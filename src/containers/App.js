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
import { LoadingPage } from '../components/ResponsePage/Loading/Loading';
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
            ThesaurusPageCondition = <Presets.TransitionFade><ThesaurusPage Word={Word} Link={Link} BackButtonClick={BackButtonClick} ReturnedWord={ReturnedWord} PartOfSpeech={PartOfSpeech} ShortDef={ShortDef}
            ReactHtmlParser={ReactHtmlParser} WordExample={WordExample} getPathName={getPathName}/></Presets.TransitionFade>
        } else if (Error) {
          ThesaurusPageCondition = <Redirect to='/' />
        } else {
          ThesaurusPageCondition = <LoadingPage/>
        }
  } else {
    ThesaurusPageCondition = <Redirect to='/' />
  }
  useEffect(() => {
    if (WordFind) {
      if (PathName !== '/') {
        setWordFind(false)
        setWordFindType('')
      }
    }

  }, [WordFind])
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