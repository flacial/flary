/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box } from '@chakra-ui/react';
import React from 'react';
import Help from '../../components/help-button/help-button.component';
import ThemeButton from '../../components/theme-button/theme-button.component';
import SearchButtonHeader from '../../components/search-button/search-button.component';

const NavBar = ({
  onOpen2, PathName, InputFiledSearchBarPopUp, ReturnedWord,
}) => (
  <Box
    zIndex="9991"
    position="sticky"
    top="0"
    h="70px"
    display="flex"
    justifyContent="flex-end"
  >
    {(PathName === '/thesaurus' && ReturnedWord.length)
      ? (
        <SearchButtonHeader
          onOpen2={onOpen2}
          InputFiledSearchBarPopUp={InputFiledSearchBarPopUp}
        />
      )
      : <></>}
    <ThemeButton />
    <Help />
  </Box>
);

export default NavBar;
