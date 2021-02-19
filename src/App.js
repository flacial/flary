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


fetch()
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log('Errrooor', err))


function App() {
  const [ Word, setWord ] = useState('')
  
  const onWordChange = (event) => {
    console.log(event.target.value)
    setWord(event.target.value)
  }

  const ButtonClick = () => {
    
  }

  return (
    <Router>
      <MainContainer>
      <Heading>Words to be searched</Heading>
        <WordsContainer>
          <WordInput onChange={onWordChange} placeholder="Type your words"/>
            <Button>
              <Link to='/thesaurus'>
                Submit
              </Link>
            </Button>
        </WordsContainer>
      </MainContainer>
      <Switch>
          <Route path='/thesaurus' >  

          </Route>
      </Switch>

    </Router>
  );
}

export default App;
