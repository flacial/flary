/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Box,
  Input,
  useColorModeValue,
  ScaleFade,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { connect } from 'react-redux';
import { onToggleSearchBar, onCloseSearchBar } from '../../redux/words/words.action';

const PopUpSearchBar = ({
  history, HandleBackButtonClick,
  getWords, isOpenSearchBar, onToggleSearchBar, onCloseSearchBar,
}) => {
  const [Word, setWord] = useState('');
  const focusBorderColorInput = useColorModeValue('#3B82F6', '#ffa500');
  const bg = useColorModeValue('#edf2f7', 'rgba(255, 255, 255, 0.08)');
  const color = useColorModeValue('#252d3d', '#edf2f7');
  const InputField = useRef(null);

  const HandleKeyDownOpenSearchBar = (event) => {
    if (event.key === 'E' && event.ctrlKey && event.shiftKey) {
      event.preventDefault();
      onToggleSearchBar();
      if (InputField?.current) {
        InputField.current.focus();
      }
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      onCloseSearchBar();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', HandleKeyDownOpenSearchBar);
    return () => {
      document.removeEventListener('keydown', HandleKeyDownOpenSearchBar);
    };
  }, [isOpenSearchBar]);

  useEffect(() => {
    if (isOpenSearchBar) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpenSearchBar]);

  const HandleEnterKeyPopUpSearchBar = (event) => {
    if (event.key === 'Enter') {
      HandleBackButtonClick(false);
      getWords(Word);
      history.push('/thesaurus');
      onCloseSearchBar();
    }
  };

  const getInputValue = (event) => {
    setWord(event.target.value);
  };

  return (
    <>
      {(isOpenSearchBar)
        ? (
          <>
            <Box position="fixed" zIndex="9999" background="gray.800" opacity="0.6" style={{ height: '100vh', width: '100vw' }} />
            <Box>
              <Box position="fixed" display="flex" alignItems="flex-start" justifyContent="center" zIndex="9999" style={{ height: '100vh', width: '100vw' }}>
                <ScaleFade in={isOpenSearchBar}>
                  <Box className="relative">
                    <InputGroup mt="32">
                      <InputLeftElement
                        zIndex="9999999"
                        pointerEvents="none"
                        // eslint-disable-next-line react/no-children-prop
                        children={<SearchIcon zIndex="9999999" color={color} />}
                      />
                      <Input id="InputField2" ref={InputField} style={{ zIndex: 999999 }} placeholder="Search a word" focusBorderColor={focusBorderColorInput} onKeyDown={HandleEnterKeyPopUpSearchBar} background={bg} color={color} w={['xs', 'xs', null]} rounded="xl" onChange={getInputValue} />
                    </InputGroup>
                  </Box>
                </ScaleFade>
                <Box position="fixed" style={{ height: '100vh', width: '100vw' }} background="transparent" onClick={onCloseSearchBar} />
              </Box>
            </Box>
          </>
        )
        : <></>}
    </>
  );
};

const mapStateToProps = ({ words }) => ({
  WordArray: words.WordArray,
  NounArray: words.NounArray,
  VerbArray: words.VerbArray,
  AdjArray: words.AdjArray,
  PhraseArray: words.PhraseArray,
  AdverbArray: words.AdverbArray,
  AvailableWordType: words.AvailableWordType,
  isOpenSearchBar: words.isOpenSearchBar,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleSearchBar: () => dispatch(onToggleSearchBar()),
  onCloseSearchBar: () => dispatch(onCloseSearchBar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PopUpSearchBar));
