/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box } from '@chakra-ui/react';
// eslint-disable-next-line no-unused-vars
import { MoonIcon, QuestionIcon } from '@chakra-ui/icons';
import React from 'react';
import Help from '../../components/help/help.component';
import ThemeButton from '../../components/theme-button/theme-button.component';
import SearchButtonHeader from '../../components/search-button/search-button.component';

const NavBar = ({
  onOpen2, PathName, InputFiledSearchBarPopUp,
}) => (
  <Box
    zIndex="9991"
    position="sticky"
    top="0"
    h="70px"
    w="100vw"
    borderRadius="0 0 20px 20px"
    display="flex"
    justifyContent="flex-end"
  >
    {(PathName === '/thesaurus')
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
