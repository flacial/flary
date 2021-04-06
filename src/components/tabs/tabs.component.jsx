/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */

import {
  TabList, Tab, Tabs, TabPanels, TabPanel, useColorModeValue,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
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
}) => {
  const boxShadow = useColorModeValue('0px 0px 25px #a1a1a1, -10px -10px 0px #3B82F6', '0px 0px 11px #1c1c1c, -10px -10px 0px orange');
  const gradientbg = useColorModeValue('linear(to-l, gray.200, white)');
  const Tabshover = useColorModeValue({ color: '#3B82F6' }, { color: 'orange' });
  const bg = useColorModeValue('#edf2f7', 'rgba(255, 255, 255, 0.08)');
  const color = useColorModeValue('#252d3d', '#edf2f7');
  const focusBorderColorGeneral = useColorModeValue({ boxShadow: '0 0 0 3px #3B82F6' }, { boxShadow: '0 0 0 3px orange' });

  // Created for HandleKeyDownTabsButtonSwitch()
  const NounTabButton = useRef(null);
  const VerbTabButton = useRef(null);
  const AdjectiveTabButton = useRef(null);
  const PhraseTabButton = useRef(null);
  const AdverbTabButton = useRef(null);
  const TabListElement = useRef(null);

  // Used for the first tab panel that will appear
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
    return false;
  };

  const ThesaurusTabPanel = (WordsArray) => (
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

  const ReduceTab = (key, ref, type) => (
    (key) ? ((Object.keys(AvailableWordType).length)
      ? <Tab ref={ref} _hover={Tabshover} _selected={{ color, bg }} _focus={focusBorderColorGeneral} outline="none" outlineColor="initial" style={{ outlineStyle: 'none' }}>{type}</Tab>
      : null
    )
      : null
  );

  const ReduceTabPanel = (typeArray, type) => (
    Object.keys(typeArray).length && InitialWordArray().fl !== type
      ? (
        <TabPanel>
          {ThesaurusTabPanel(typeArray)}
        </TabPanel>
      )
      : null
  );

  return (
    <>
      <Tabs defaultIndex={0} align="center" variant="soft-rounded">
        <Presets.TransitionFade>
          <TabList ref={TabListElement} flexWrap="wrap" marginTop={['4', '2', null]}>
            {ReduceTab(AvailableWordType.noun, NounTabButton, 'Noun')}
            {ReduceTab(AvailableWordType.verb, VerbTabButton, 'Verb')}
            {ReduceTab(AvailableWordType.adjective, AdjectiveTabButton, 'Adjective')}
            {ReduceTab(AvailableWordType.phrase, PhraseTabButton, 'Phrase')}
            {ReduceTab(AvailableWordType.adverb, AdverbTabButton, 'Adverb')}
          </TabList>
        </Presets.TransitionFade>
        <TabPanels>
          <TabPanel>
            {ThesaurusTabPanel(InitialWordArray())}
          </TabPanel>
          {ReduceTabPanel(VerbArray, 'verb')}
          {ReduceTabPanel(AdjArray, 'adjective')}
          {ReduceTabPanel(PhraseArray, 'phrase')}
          {ReduceTabPanel(AdverbArray, 'adverb')}
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

export default connect(mapStateToProps, mapDispatchToProps)(WordsTabs);
