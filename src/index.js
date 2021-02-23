import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
// import theme from './theme';
import {ColorModeScript} from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Playfair Display",
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
    <ColorModeScript theme={theme} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);