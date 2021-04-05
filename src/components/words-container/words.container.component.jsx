/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import {
  chakra,
} from '@chakra-ui/react';

const WordTypeContainer = styled.div`
border-radius: 29px;
text-align: left;
width: auto;
height: auto;
padding-left: 20px;
padding-right: 20px;
padding-top: 15px;
padding-bottom: 20px;
word-spacing: 0;
`;

const ChakraWordTypeContainer = chakra(WordTypeContainer);

const WordsContainer = (props) => {
  const {
    children, ml, mr, marginTop, boxShadow, gradientbg,
  } = props;

  return (
    <ChakraWordTypeContainer
      boxShadow={boxShadow}
      bgGradient={gradientbg}
      ml={ml}
      mr={mr}
      marginTop={marginTop}
    >
      {children}
    </ChakraWordTypeContainer>
  );
};

export default WordsContainer;
