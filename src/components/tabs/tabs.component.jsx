/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */

import {
  TabList, Tab, Tabs, TabPanels, TabPanel, useColorModeValue,
} from '@chakra-ui/react';
// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect, useState } from 'react';
import { Presets } from 'react-component-transition';
import { connect } from 'react-redux';
import LoadingSkeleton from '../loading-skeleton/loading-skeleton.component';
import WordsContainer from '../words-container/words.container.component';
import WordsContainerContent from '../words-container-content/words-container-content';
import ErrorBoundary from '../error-boundary/error-boundary.component';
import { setAvailableWordType } from '../../redux/words/words.action';

const WordsTabs = ({
  AvailableWordType,
  WordsLoaded,
  getWords,
  HandleBackButtonClick,
  NounArray,
  VerbArray,
  AdjArray,
  PhraseArray,
  AdverbArray,
  // WordArray,
}) => {
  const boxShadow = useColorModeValue('0px 0px 25px #a1a1a1, -10px -10px 0px #3B82F6', '0px 0px 11px #1c1c1c, -10px -10px 0px orange');
  const gradientbg = useColorModeValue('linear(to-l, gray.200, white)');
  const Tabshover = useColorModeValue({ color: '#3B82F6' }, { color: 'orange' });
  const bg = useColorModeValue('#edf2f7', 'rgba(255, 255, 255, 0.08)');
  const color = useColorModeValue('#252d3d', '#edf2f7');
  const focusBorderColorGeneral = useColorModeValue({ boxShadow: '0 0 0 3px #3B82F6' }, { boxShadow: '0 0 0 3px orange' });

  const NounTabButton = useRef(null);
  const VerbTabButton = useRef(null);
  const AdjectiveTabButton = useRef(null);
  const PhraseTabButton = useRef(null);
  const AdverbTabButton = useRef(null);
  const TabListElement = useRef(null);

  // eslint-disable-next-line consistent-return
  const InitialWordArray = () => {
    if (Object?.keys(NounArray)?.length) {
      return NounArray;
    }
    if (Object.keys(VerbArray).length) {
      return VerbArray;
    }
    if (Object.keys(AdjArray).length) {
      return AdjArray;
    }
    if (Object.keys(PhraseArray).length) {
      return PhraseArray;
    }
    if (Object.keys(AdverbArray).length) {
      return AdverbArray;
    }
  };

  // eslint-disable-next-line consistent-return
  // const HandleKeyDownTabsButtonSwitch = (event, AvailableWordType) => {
  //   switch (event.key) {
  //     case '!': // Noun 1
  //       if (TabListElement?.current?.childElementCount >= 2) {
  //         event.preventDefault();
  //         return (!AvailableWordType.noun && AdjectiveTabButton?.current?.click()) || NounTabButton?.current?.click();
  //       }
  //       break;
  //     case '@': // Verb 2
  //       event.preventDefault();
  //       return VerbTabButton?.current?.click();
  //     case '#': // Adjective 3
  //       if (AvailableWordType?.noun && AvailableWordType?.verb) {
  //         event.preventDefault();
  //         return AdverbTabButton?.current?.click() || PhraseTabButton?.current?.click() || AdjectiveTabButton?.current?.click();
  //       }
  //       break;
  //     case '$': // Phrase 4
  //       event.preventDefault();
  //       return AdverbTabButton?.current?.click() || PhraseTabButton?.current?.click();
  //     case '%': // Adverb 5
  //       if (AvailableWordType?.phrase) {
  //         event.preventDefault();
  //         AdverbTabButton?.current?.click();
  //       }
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('keydown', (e) => HandleKeyDownTabsButtonSwitch(e, AvailableWordType));
  //   return () => {
  //     document.removeEventListener('keydown', (e) => HandleKeyDownTabsButtonSwitch(e, AvailableWordType));
  //   };
  // }, [AvailableWordType]);

  const TheWholeThesaurus = (WordsArray) => (
    <WordsContainer boxShadow={boxShadow} gradientbg={gradientbg} ml={['0', '9em', null]} mr={['0', '9em', null]} marginTop={['3', null, null]}>
      <Presets.TransitionFade>
        {(WordsLoaded)
          ? (
            <ErrorBoundary>
              <WordsContainerContent
                getWords={getWords}
                HandleBackButtonClick={HandleBackButtonClick}
                WordsArray={WordsArray}
              />
            </ErrorBoundary>
          )
          : (
            <LoadingSkeleton />
          )}
      </Presets.TransitionFade>
    </WordsContainer>
  );

  return (
    <>
      <Tabs defaultIndex={0} align="center" variant="soft-rounded">
        {/* <Box className='backdrop-blur z-50' display='flex'
         justifyContent='center' h='22' width='full'  position='fixed' bottom='0'> */}
        <Presets.TransitionFade>
          <TabList ref={TabListElement} flexWrap="wrap" marginTop={['4', '2', null]}>
            {(AvailableWordType.noun) ? ((Object.keys(AvailableWordType).length)
              ? <Tab ref={NounTabButton} _hover={Tabshover} _selected={{ color, bg }} _focus={focusBorderColorGeneral} outline="none" outlineColor="initial" style={{ outlineStyle: 'none' }}>Noun</Tab>
              : null
            )
              : null}
            {(AvailableWordType.verb) ? ((Object.keys(AvailableWordType).length)
              ? <Tab ref={VerbTabButton} _hover={Tabshover} _selected={{ color, bg }} _focus={focusBorderColorGeneral} outline="none" outlineColor="initial" style={{ outlineStyle: 'none' }}>Verb</Tab>
              : null
            )
              : null}
            {(AvailableWordType.adjective) ? ((Object.keys(AvailableWordType).length)
              ? <Tab ref={AdjectiveTabButton} _hover={Tabshover} _selected={{ color, bg }} _focus={focusBorderColorGeneral} outline="none" outlineColor="initial" style={{ outlineStyle: 'none' }}>Adjective</Tab>
              : null
            )
              : null}
            {(AvailableWordType.phrase) ? ((Object.keys(AvailableWordType).length)
              ? <Tab ref={PhraseTabButton} _hover={Tabshover} _selected={{ color, bg }} _focus={focusBorderColorGeneral} outline="none" outlineColor="initial" style={{ outlineStyle: 'none' }}>Phrase</Tab>
              : null
            )
              : null}
            {(AvailableWordType.adverb) ? ((Object.keys(AvailableWordType).length)
              ? <Tab ref={AdverbTabButton} _hover={Tabshover} _selected={{ color, bg }} _focus={focusBorderColorGeneral} outline="none" outlineColor="initial" style={{ outlineStyle: 'none' }}>Adverb</Tab>
              : null
            )
              : null}
          </TabList>
        </Presets.TransitionFade>
        {/* </Box> */}
        <TabPanels>
          <TabPanel>
            {TheWholeThesaurus(InitialWordArray())}
          </TabPanel>
          {/* )
              : null
          } */}
          {
            Object.keys(VerbArray).length && InitialWordArray().fl !== 'verb'
              ? (
                <TabPanel>
                  {TheWholeThesaurus(VerbArray)}
                </TabPanel>
              )
              : null
          }
          {
            Object.keys(AdjArray).length && InitialWordArray().fl !== 'adjective'
              ? (
                <TabPanel>
                  {TheWholeThesaurus(AdjArray)}
                </TabPanel>
              )
              : null
          }
          {
            Object.keys(PhraseArray).length && InitialWordArray().fl !== 'phrase'
              ? (
                <TabPanel>
                  {TheWholeThesaurus(PhraseArray)}
                </TabPanel>
              )
              : null
          }
          {
            Object.keys(AdverbArray).length && InitialWordArray().fl !== 'adverb'
              ? (
                <TabPanel>
                  {TheWholeThesaurus(AdverbArray)}
                </TabPanel>
              )
              : null
          }
        </TabPanels>
      </Tabs>
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
});

const mapDispatchToProps = (dispatch) => ({
  setAvailableWordType: (word) => dispatch(setAvailableWordType(word)),
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(WordsTabs));
