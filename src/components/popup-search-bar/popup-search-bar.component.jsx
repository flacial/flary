/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { Presets } from 'react-component-transition';
import {
  chakra,
  Box,
  Input,
  useDisclosure,
  useColorModeValue,
  Portal,
  Fade,
  ScaleFade,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const PopUpSearchBar = ({
  history, HandleBackButtonClick, setWordsLoaded,
  getWords, location, match, isOpen2, onToggle2, onClose2, onOpen2,
}) => {
  const [Word, setWord] = useState('');
  const [PathName, setPathName] = useState('');
  const focusBorderColorInput = useColorModeValue('#3B82F6', '#ffa500');
  const bg = useColorModeValue('#edf2f7', 'rgba(255, 255, 255, 0.08)');
  const color = useColorModeValue('#252d3d', '#edf2f7');
  const InputField = useRef(null);

  useEffect(() => {
    setPathName(location.pathname);
    return () => {
      setPathName('');
    };
  }, []);

  const HandleSearchButtonClickHeader = () => {
    onToggle2();
    if (InputField?.current) {
      InputField.current.focus();
    }
  };

  const HandleKeyDownOpenSearchBar = (event) => {
    if (event.key === 'E' && event.ctrlKey && event.shiftKey) {
      event.preventDefault();
      onToggle2();
      if (InputField?.current) {
        InputField.current.focus();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', HandleKeyDownOpenSearchBar);
    return () => {
      document.removeEventListener('keydown', HandleKeyDownOpenSearchBar);
    };
  }, [isOpen2]);

  useEffect(() => {
    if (isOpen2) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen2]);

  const HandleEnterKeyPopUpSearchBar = (event) => {
    if (event.key === 'Enter') {
      //   setWordsLoaded(false);
      HandleBackButtonClick(false);
      getWords(Word);
      history.push('/thesaurus');
      onClose2();
    }
  };

  const getInputValue = (event) => {
    setWord(event.target.value);
  };

  return (
    <>
      {(isOpen2)
        ? (
          <>
            <Box position="fixed" zIndex="9999" background="gray.800" opacity="0.6" style={{ height: '100vh', width: '100vw' }} />
            <Box>
              <Box position="fixed" display="flex" alignItems="flex-start" justifyContent="center" zIndex="9999" w="full" style={{ height: '100vh' }}>
                <ScaleFade in={isOpen2}>
                  <Box className="relative">
                    <InputGroup mt="32">
                      <InputLeftElement
                        zIndex="9999999"
                        pointerEvents="none"
                        // eslint-disable-next-line react/no-children-prop
                        children={<SearchIcon zIndex="9999999" color={color} />}
                      />
                      <Input ref={InputField} style={{ zIndex: 999999 }} placeholder="Search a word" focusBorderColor={focusBorderColorInput} onKeyDown={HandleEnterKeyPopUpSearchBar} background={bg} color={color} w={['16rem', 'xs', null]} rounded="xl" onChange={getInputValue} />
                    </InputGroup>
                  </Box>
                </ScaleFade>
                <Box position="absolute" w="full" h="full" background="transparent" onClick={onClose2} />
              </Box>
            </Box>
          </>
        )
        : <></>}
    </>
  );
};

export default withRouter(PopUpSearchBar);
