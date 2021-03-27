/* eslint-disable react/prop-types */
import { Input, useColorModeValue } from '@chakra-ui/react';
import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';

const SearchInput = ({ getInputValue, getWords, history }) => {
  const focusBorderColorInput = useColorModeValue('#3B82F6',
    '#ffa500');
  const [WordValueSP, setWordSP] = useState('');
  const inputField = useRef(null);

  const HandleFocusOnInputEnterCtrlShift = (event) => {
    if (event.key === 'A' && event.ctrlKey) {
      event.preventDefault();
      inputField.current.focus();
    }
  };

  const onBlur = () => {
    if (WordValueSP.length) {
      getInputValue(WordValueSP);
    }
  };

  const HandleEnterKey = (event) => {
    if (event.which === 13) {
      getInputValue(WordValueSP);
      getWords(WordValueSP);
      history.push('/thesaurus');
    }
  };

  const onInputChange = (event) => {
    setWordSP(event.target.value);
  };

  useEffect(() => {
    document.addEventListener('keydown', HandleFocusOnInputEnterCtrlShift);
    return () => {
      document.removeEventListener('keydown', HandleFocusOnInputEnterCtrlShift);
    };
  });

  return (
    <Input ref={inputField} focusBorderColor={focusBorderColorInput} onKeyPress={HandleEnterKey} variant="filled" w={['18rem', 'xs', null]} rounded="xl" mr={[null, null, '2rem']} value={WordValueSP} onBlur={onBlur} onChange={onInputChange} paddingY="5" placeholder="Search for words" paddingLeft="9" />
  );
};

export default withRouter(SearchInput);
