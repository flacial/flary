/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box } from '@chakra-ui/react';
import React, { Suspense, lazy } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Help from '../help-button/help-button.component';
import ThemeButton from '../theme-button/theme-button.component';
import SearchButtonHeader from '../search-button/search-button.component';
import ErrorBoundary from '../error-boundary/error-boundary.component';

const PopUpSearchBar = lazy(() => import('../popup-search-bar/popup-search-bar.component'));

const NavBar = ({
  onOpen2,
  InputFiledSearchBarPopUp,
  location,
  ReturnedWord,
  getWords,
  setWordsLoaded,
  HandleBackButtonClick,
  onToggle2,
  onClose2,
  isOpen2,
  getInputValue,
  WordsLoaded,
}) => (
  <Box
    zIndex="9991"
    position="sticky"
    top="0"
    h="70px"
    display="flex"
    justifyContent="flex-end"
  >
    {(location.pathname === '/thesaurus' && WordsLoaded)
      ? (
        <>
          <Presets.TransitionFade>
            <Suspense fallback={null}>
          <SearchButtonHeader
                WordsLoaded={WordsLoaded}
            InputFiledSearchBarPopUp={InputFiledSearchBarPopUp}
          />
            </Suspense>
          </Presets.TransitionFade>
        </>
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
