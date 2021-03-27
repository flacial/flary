/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box } from '@chakra-ui/react';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Help from '../help-button/help-button.component';
import ThemeButton from '../theme-button/theme-button.component';
import SearchButtonHeader from '../search-button/search-button.component';

const NavBar = ({
  onOpen2, InputFiledSearchBarPopUp, location, ReturnedWord,
}) => (
  <Box
    zIndex="9991"
    position="sticky"
    top="0"
    h="70px"
    display="flex"
    justifyContent="flex-end"
  >
    {(location.pathname === '/thesaurus' && ReturnedWord.length)
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

const mapStateToProps = ({ words }) => ({
  ReturnedWord: words.ReturnedWord,
});

export default connect(mapStateToProps, null)(withRouter(NavBar));
