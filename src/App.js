import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  Redirect,
} from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser';
import { useState, useEffect } from 'react';
import { getRequest } from './components/RequestPage/Functions/getRequest/getRequest';
import SearchPage from './components/RequestPage/SearchPage/SearchPage';
import { ThesaurusPage } from './components/ResponsePage/ThesaurusPage/ThesaurusPage';
import { LoadingPage } from './components/ResponsePage/Loading/Loading';
import NavBar from './components/NavBar/NavBar';

const  App = () => {
  const [ Word, setWord ] = useState('')
  const [ ReturnedWord, setReturnedWord] = useState('')
  const [ ShortDef, setShortDef ] = useState('')
  const [ PartOfSpeech, setPartOfSpeech ] = useState('')
  const [ WordExample, setWordExample ] = useState('')
  const [ Error, setError ] = useState(false)
  const [ PathName, setPathName ] = useState('')

  const getInputValue = (event) => {
    setWord(event.target.value)
  }
  
  const getButtonClick = () => {
    if (Word === '') {
          alert('Type a word please')
        } else {
    getRequest(Word)
    .then(response => sendRequstedWord(response))
        }
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
            setTimeout(() => {
              alert('Word not found')
            }, 100);
          }
    }
    catch (error) {
      console.log(error)
      setError(true)
      alert('Word not found')
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
    return ThesaurusPageCondition
  }

  const getPathName = (Path) => {
    setPathName(Path)
  }

  useEffect(() => {
    if (PathName === '/' && ShortDef.length) {
      BackButtonClick()
    }
  }, [PathName])


  return (
    <Router basename='/wordsapiproject' >
    <NavBar/>
      <Switch>
          <Route exact path='/'>
            <SearchPage getInputValue={getInputValue} getButtonClick={getButtonClick} Link={Link} getPathName={getPathName} />
          </Route>
          <Route exact path='/thesaurus'>
          {ThesaurusPageComponent()}
          </Route>
      </Switch>
    </Router>
)
}

export default App;