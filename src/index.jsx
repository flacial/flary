/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import theme from './theme';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ChakraProvider>
        <Router basename="/flary">
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
        </Router>
      </ChakraProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
