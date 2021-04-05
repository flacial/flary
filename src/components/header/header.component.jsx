/* eslint-disable react/prop-types */
import { Box, useMediaQuery } from '@chakra-ui/react';
import React, { Suspense, lazy } from 'react';
import { withRouter } from 'react-router-dom';
import { Presets } from 'react-component-transition';
import Help from '../help-button/help-button.component';
import ThemeButton from '../theme-button/theme-button.component';
import GitHubButton from '../github-button/github-button.component';

const SearchButtonHeader = lazy(() => import('../search-button/search-button.component'));

const Header = ({
  InputFiledSearchBarPopUp,
  location,
  WordsLoaded,
}) => {
  const [isMoreThan420px] = useMediaQuery('(max-width: 420px)');

  return (
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
      <GitHubButton />
      <ThemeButton />
      {
        isMoreThan420px
          ? <></>
          : <Help />
      }
    </Box>
  );
};
export default withRouter(Header);
