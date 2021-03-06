/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App';
import NavBar from './components/NavBar/NavBar';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router basename="/wordsapiproject">
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <NavBar />
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
