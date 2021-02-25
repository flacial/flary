import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import {ColorModeScript} from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'

const theme = extendTheme({
  fonts: {
    heading: "Playfair Display",
    body: "Open Sans",
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
    <Router basename='/wordsapiproject' >
    <ColorModeScript theme={theme} />
      <App />
    </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);