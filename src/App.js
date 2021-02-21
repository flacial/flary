import './App.css';
import  { Fragment }  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  Redirect
} from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser';
import { useState, useEffect } from 'react'
import { getRequest } from './components/RequestPage/Functions/getRequest/getRequest';
import Thesaurus from './components/RequestPage/Thesaurus/Thesaurus';
import { Home } from './components/ResponsePage/Home/Home';
import { Loading, SvgPeriod, LoadingAndSvgContainer } from './components/ResponsePage/Loading/Loading';
function App() {
  const [ Word, setWord ] = useState('')
  const [ ReturnedWord, setReturnedWord] = useState('')
  const [ ShortDef, setShortDef ] = useState('')
  const [ PartOfSpeech, setPartOfSpeech ] = useState('')
  const [ WordExample, setWordExample ] = useState('')
  const [ Error, setError ] = useState(false)

  const getInputValue = (event) => {
    setWord(event.target.value)
  }

  const getButtonClick = () => {
        if (Word === '') {
          alert('Type a word please')
        } 
        getRequest(Word)
        .then(response => sendRequstedWord(response))
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
          if (word.length > 1) {
            RequestedThesaurus(word, 1)
          } else if (word.length === 1) {
            RequestedThesaurus(word, 0)
          } else if (!word[0]) {
            setError(true)
            alert('Word not found')
          }
    }
    catch (error) {
      console.log(error)
    }
  }

  const HomeComponent = () => {
    let HomeCondition;
    if (Word.length) {
        if (ReturnedWord.length) {
            HomeCondition = <Home Word={Word} Link={Link} BackButtonClick={BackButtonClick} ReturnedWord={ReturnedWord} PartOfSpeech={PartOfSpeech} ShortDef={ShortDef}
            ReactHtmlParser={ReactHtmlParser} WordExample={WordExample} Redirect={Redirect}/>
        } else if (Error) {
          HomeCondition = <Redirect to='/' />
        } else {
          HomeCondition = <LoadingAndSvgContainer>
                            <Loading>Loading</Loading>
                            <span className='text-9xl inline text-white font-serif' >.</span>
                          </LoadingAndSvgContainer>
        }
  } else {
    HomeCondition = <Redirect to='/' />
  }
    return HomeCondition
  }

  const PlusButtonClick = () => {
    setWord('')
    setReturnedWord('')
    setPartOfSpeech('')
    setShortDef('')
    setWordExample('')
  }

  

  return (
    <Router>
      <Switch>
          <Route exact path='/'>
            <Thesaurus getInputValue={getInputValue} PlusButtonClick={PlusButtonClick} getButtonClick={getButtonClick} Link={Link} />
          </Route>
          <Route exact path='/thesaurus'>
          {HomeComponent()}
          </Route>
      </Switch>
    </Router>
)
}

export default App;
