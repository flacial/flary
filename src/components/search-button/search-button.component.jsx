/* eslint-disable react/prop-types */
import React from 'react';
import {
  Button, useColorModeValue,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchButtonHeader = ({ onOpen2 }) => {
  const focusBorderColorInput = useColorModeValue({ boxShadow: '0 0 0 3px #3B82F6' }, { boxShadow: '0 0 0 3px orange' });
  const textShadow = useColorModeValue('0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.1), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.10);',
    '0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5);');
  const hoverShadowNeonDark = useColorModeValue({ background: 'gray.200' }, { boxShadow: '0 0 5px #FFF, 0 0 10px #FFF, 0 0 7px #FFF, 0 0 3px #49ff18, 0 0 5px #c75600, 0 0 10px #c75600, 0 0 10px #c75600, 0 0 20px #c75600' });
  return (
    <Button _hover={hoverShadowNeonDark} _focus={hoverShadowNeonDark} focusBorderColor={focusBorderColorInput} boxShadow={textShadow} outline="none" outlineColor="initial" style={{ outlineStyle: 'none' }} m="4" mr="-1" rounded="xl" onClick={onOpen2}>
      <SearchIcon />
    </Button>
  );
};

export default SearchButtonHeader;
