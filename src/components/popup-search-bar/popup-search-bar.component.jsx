/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Presets } from 'react-component-transition';
import {
  chakra,
  Box,
  Input,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';

const PopUpSearchBar = ({
  history, HandleBackButtonClick, setWordsLoaded, getWords, location, match,
}) => {
  const [Word, setWord] = useState('');
  const [PathName, setPathName] = useState('');
  const { isOpen, onToggle } = useDisclosure();
  const focusBorderColorInput = useColorModeValue('#3B82F6', '#ffa500');

  useEffect(() => {
    setPathName(location.pathname);
    return () => {
      setPathName('');
    };
  }, []);

  const HandleKeyDownOpenSearchBar = (event) => {
    if (event.key === 'E' && event.ctrlKey && event.shiftKey) {
      event.preventDefault();
      onToggle();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', HandleKeyDownOpenSearchBar);
    return () => {
      document.removeEventListener('keydown', HandleKeyDownOpenSearchBar);
    };
  }, [isOpen]);

  const HandleEnterKeyPopUpSearchBar = (event) => {
    if (event.which === 13) {
      //   setWordsLoaded(false);
      HandleBackButtonClick(false);
      getWords(Word);
      history.push('/thesaurus');
    }
  };

  const getInputValue = (event) => {
    setWord(event.target.value);
  };

  return (
    <>
      {(isOpen)
        ? (
          <>
            <Box position="fixed" zIndex="9999" background="gray.800" opacity="0.6" style={{ height: '100vh', width: '100vw' }} />
            <Box>
              <Box position="absolute" display="flex" alignItems="center" justifyContent="center" zIndex="sticky" w="full" style={{ height: '100vh', zIndex: 9999 }}>
                <Box className="relative">
                  <Input style={{ zIndex: 9992 }} placeholder="Search a word" focusBorderColor={focusBorderColorInput} onKeyDown={HandleEnterKeyPopUpSearchBar} background="gray.700" color="white" w={['16rem', 'xs', null]} rounded="xl" onChange={getInputValue} />
                </Box>
              </Box>
            </Box>
          </>
        )
        : <></>}
    </>
  );
};

export default withRouter(PopUpSearchBar);
