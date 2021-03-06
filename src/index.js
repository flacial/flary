import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { ChakraProvider } from '@chakra-ui/react'
import {ColorModeScript} from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
    <Router basename='/wordsapiproject' >
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <NavBar />
      <App />
    </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);