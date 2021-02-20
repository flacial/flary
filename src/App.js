import './App.css';
import {  
  BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom'
import { useState } from 'react'
import { MainContainer } from './components/RequestPage//MainContainer/MainContainer';
import { Heading } from './components/RequestPage/Heading/Heading';
import { Button } from './components/RequestPage/Button/Button';
import WordInput from './components/RequestPage/inputs';
import WordsContainer from './components/RequestPage/WordsContainer';
import { getRequest } from './components/RequestPage/Functions/getRequest';


function App() {
  const [ Word, setWord ] = useState('')
  const [ ReturnedWord, setReturnedWord] = useState('')
  const [ ShortDef, setShortDef ] = useState('')
  const [ PartOfSpeech, setPartOfSpeech ] = useState('')

  const getInputValue = (event) => {
    setWord(event.target.value)
  }

  const getButtonClick = () => {
    getRequest(Word)
    .then(response => ReturnedTheas(response))
  }

  const ReturnedTheas = (word) => {
    try {
    let arrayOfWords = word[0]
    let { fl, hwi: {hw},  shortdef } = word[0]
    
    setReturnedWord(hw)
    setPartOfSpeech(fl)
    setShortDef(shortdef[0])
    }
    catch {
      console.log('error, word not found')
    }
  }

  return (
    <Router>
      <Switch>
          <Route exact path='/'>
            <MainContainer>
              <Heading>Words to be thesaurused</Heading>
              <WordsContainer>
                <WordInput onChange={getInputValue} placeholder="Type your words"/>
                  <Button onClick={getButtonClick}>
                    <Link to='/thesaurus'>
                      Submit
                    </Link>
                  </Button>
              </WordsContainer>
            </MainContainer>
          </Route>
          <Route path='/thesaurus'>  
            <h2>{ ReturnedWord }</h2>
            <h2>{ PartOfSpeech }</h2>
            <h2> { ShortDef } </h2>
          </Route>
      </Switch>

    </Router>
  );
}

export default App;
