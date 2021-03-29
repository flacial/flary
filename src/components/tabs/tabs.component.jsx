/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import {
  TabList, Tab, Tabs, TabPanels, TabPanel, useColorModeValue,
} from '@chakra-ui/react';
import React, { useRef, useEffect, useState } from 'react';
import { Presets } from 'react-component-transition';
import { connect } from 'react-redux';
import LoadingSkeleton from '../loading-skeleton/loading-skeleton.component';
import WordsContainer from '../words-container/words.container.component';
import WordsContainerContent from '../words-container-content/words-container-content';
import {
  setWord,
  setReturnedWord,
  setShortDef,
  setPartOfSpeech,
  setWordExample,
  setAnts,
  setSyns,
  setWordArray,
} from '../../redux/words/words.action';
import ErrorBoundary from '../error-boundary/error-boundary.component';

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
  const [isThere, setisThere] = useState({});

  // eslint-disable-next-line consistent-return
  const InitialWordArray = () => {
    if (Object.keys(NounArray).length) {
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

  // useEffect(() => {
  //   console.warn('ran');
  //   if (Object.keys(NounArray).length) {
  //     setisThere((ps) => ({ ...ps, noun: true }));
  //   }
  //   if (Object.keys(VerbArray).length) {
  //     setisThere((ps) => ({ ...ps, verb: true }));
  //   }
  //   if (Object.keys(AdjArray).length) {
  //     setisThere((ps) => ({ ...ps, adj: true }));
  //   }
  //   if (Object.keys(PhraseArray).length) {
  //     setisThere((ps) => ({ ...ps, phrase: true }));
  //   }
  //   if (Object.keys(AdverbArray).length) {
  //     setisThere((ps) => ({ ...ps, adverb: true }));
  //   }
  // }, [AvailableWordType]);

  const HandleKeyDownTabsButton123 = (event) => {
    switch (event.key) {
      case '!':
        event.preventDefault();
        NounTabButton?.current?.click();
        break;
      case '@':
        event.preventDefault();
        VerbTabButton?.current?.click();
        break;
      case '#':
        event.preventDefault();
        AdjectiveTabButton?.current?.click();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', HandleKeyDownTabsButton123);
    return () => {
      document.removeEventListener('keydown', HandleKeyDownTabsButton123);
    };
  }, []);

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
      <Tabs align="center" variant="soft-rounded">
        {/* <Box className='backdrop-blur z-50' display='flex'
         justifyContent='center' h='22' width='full'  position='fixed' bottom='0'> */}
        <Presets.TransitionFade>
          <TabList marginTop={['4', '2', null]}>
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
              : <></>
            )
              : null}
            {(AvailableWordType.phrase) ? ((Object.keys(AvailableWordType).length)
              ? <Tab ref={AdjectiveTabButton} _hover={Tabshover} _selected={{ color, bg }} _focus={focusBorderColorGeneral} outline="none" outlineColor="initial" style={{ outlineStyle: 'none' }}>Phrase</Tab>
              : null
            )
              : null}
            {(AvailableWordType.adverb) ? ((Object.keys(AvailableWordType).length)
              ? <Tab ref={AdjectiveTabButton} _hover={Tabshover} _selected={{ color, bg }} _focus={focusBorderColorGeneral} outline="none" outlineColor="initial" style={{ outlineStyle: 'none' }}>Adverb</Tab>
              : null
            )
              : null}
          </TabList>
        </Presets.TransitionFade>
        {/* </Box> */}
        <TabPanels>
          {/* {
          WordArray.length
            ? null
            : (
              <WordsContainer boxShadow={boxShadow} gradientbg={gradientbg} ml={['0', '9em', null]} mr={['0', '9em', null]} marginTop={['3', null, null]}>
                <Presets.TransitionFade>
                  <LoadingSkeleton />
                </Presets.TransitionFade>
              </WordsContainer>
            )
        } */}
          {/* {
            Object.keys(NounArray).length
              ? ( */}
          <TabPanel>
            {TheWholeThesaurus(InitialWordArray())}
          </TabPanel>
          {/* )
              : null
          } */}
          {
            Object.keys(VerbArray).length
              ? (
                <TabPanel>
                  {TheWholeThesaurus(VerbArray)}
                </TabPanel>
              )
              : null
          }
          {
            Object.keys(AdjArray).length
              ? (
                <TabPanel>
                  {TheWholeThesaurus(AdjArray)}
                </TabPanel>
              )
              : null
          }
          {
            Object.keys(PhraseArray).length
              ? (
                <TabPanel>
                  {TheWholeThesaurus(PhraseArray)}
                </TabPanel>
              )
              : null
          }
          {
            Object.keys(AdverbArray).length
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
  Word: words.Word,
  ReturnedWord: words.ReturnedWord,
  ShortDef: words.ShortDef,
  PartOfSpeech: words.PartOfSpeech,
  WordExample: words.WordExample,
  Syns: words.Syns,
  Ants: words.Ants,
  WordArray: words.WordArray,
  NounArray: words.NounArray,
  VerbArray: words.VerbArray,
  AdjArray: words.AdjArray,
  PhraseArray: words.PhraseArray,
  AdverbArray: words.AdverbArray,
});

const mapDispatchToProps = (dispatch) => ({
  // eslint-disable-next-line no-undef
  setWord: (word) => dispatch(setWord(word)),
  setReturnedWord: (word) => dispatch(setReturnedWord(word)),
  setShortDef: (word) => dispatch(setShortDef(word)),
  setPartOfSpeech: (word) => dispatch(setPartOfSpeech(word)),
  setWordExample: (word) => dispatch(setWordExample(word)),
  setAnts: (word) => dispatch(setAnts(word)),
  setSyns: (word) => dispatch(setSyns(word)),
  setWordArray: (word) => dispatch(setWordArray(word)),
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(WordsTabs));
