/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { Fade, chakra, Box } from '@chakra-ui/react';

const ErrorMessage = ({ isOpen, WordFindType }) => (
  <Fade in={isOpen}>
    <Box mt="1" display="flex" justifyContent={['center', 'flex-start', null]} transition="ease">
      <chakra.svg mt="1" ml={[null, '4', null]} outline="none" stroke="currentColor" fill="red.400" strokeWidth="0" viewBox="0 0 512 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M256,0C115.2,0,0,115.2,0,256s115.2,256,256,256s256-115.2,256-256S396.8,0,256,0z M256,51.2    c28.16,0,48.64,23.04,46.08,51.2L281.6,307.2h-51.2l-20.48-204.8C207.36,74.24,227.84,51.2,256,51.2z M256,460.8    c-28.16,0-51.2-23.04-51.2-51.2c0-28.16,23.04-51.2,51.2-51.2s51.2,23.04,51.2,51.2C307.2,437.76,284.16,460.8,256,460.8z" />
      </chakra.svg>
      <chakra.span ml="1" mb={['-1', 0, 0]} color="red.400">
        {(WordFindType === 'no response' ? 'Word not found! (Probably Misspelled)' : ((WordFindType === 'no input') ? 'Input is empty, type a word!' : 'The word isn\'t in the thesaurus!'))}
      </chakra.span>
    </Box>
  </Fade>
);

export default ErrorMessage;
