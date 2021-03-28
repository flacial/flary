/* eslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import tw from 'tailwind-styled-components';
import {
  TabList, Tab, Tabs, TabPanels, TabPanel, useColorModeValue, chakra,
} from '@chakra-ui/react';
import React, { useRef, useEffect } from 'react';
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

const ThesaurusHeader = tw.h1`
italic
font-serif
text-3xl
font-bold
inline-block
`;

const ChakraThesaurusHeader = chakra(ThesaurusHeader);

const WordsTabs = ({
  AvailableWordType,
  WordsLoaded,
  getWords,
  WordExample,
  HandleBackButtonClick,
  WordArray,
  setReturnedWord,
  setShortDef,
  setPartOfSpeech,
  setWordExample,
  setAnts,
  setSyns,
}) => {
  const boxShadow = useColorModeValue('0px 0px 25px #a1a1a1, -10px -10px 0px #3B82F6', '0px 0px 11px #1c1c1c, -10px -10px 0px orange');
  const gradientbg = useColorModeValue('linear(to-l, gray.200, white)');
  const Tabshover = useColorModeValue({ color: '#3B82F6' }, { color: 'orange' });
  const fontColorDarkWhiteSmallWords = useColorModeValue('#3B82F6', 'orange');
  const bg = useColorModeValue('#edf2f7', 'rgba(255, 255, 255, 0.08)');
  const color = useColorModeValue('#252d3d', '#edf2f7');
  const focusBorderColorGeneral = useColorModeValue({ boxShadow: '0 0 0 3px #3B82F6' }, { boxShadow: '0 0 0 3px orange' });

  const NounTabButton = useRef(null);
  const VerbTabButton = useRef(null);
  const AdjectiveTabButton = useRef(null);

  const WordsArrayFilter = (wordObjects, type) => {
    const filteredArray = wordObjects.filter((word) => word.fl === type);
    return filteredArray[0];
  };

  const WordArraySetState = (wordArray) => {
    const {
      fl,
      hwi: {
        hw,
      },
      shortdef,
      def: [{
        sseq: dt,
      }],
      meta: {
        syns,
      },
      meta: {
        ants,
      },
    } = wordArray;
    const Example = dt[0][0][1].dt?.[1]?.[1]?.[0].t ?? dt[0][0][1].dt[0][1];
    const ExampleModified = Example.replace('{it}', '<em>').replace('{/it}', '</em>');
    setAnts(ants[0]);
    setSyns(syns[0]);
    setReturnedWord(hw);
    setPartOfSpeech(fl);
    setShortDef(shortdef[0]);
    setWordExample(ExampleModified);
  };

  const HandleTabClick = (type) => {
    switch (type) {
      case 'verb':
        WordArraySetState(WordsArrayFilter(WordArray, 'verb'));
        break;
      case 'noun':
        WordArraySetState(WordsArrayFilter(WordArray, 'noun'));
        break;
      case 'adjective':
        WordArraySetState(WordsArrayFilter(WordArray, 'adjective'));
        break;
      default:
        break;
    }
  };

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

  const TheWholeThesaurus = () => (
    <WordsContainer boxShadow={boxShadow} gradientbg={gradientbg} ml={['0', '9em', null]} mr={['0', '9em', null]} marginTop={['3', null, null]}>
      <Presets.TransitionFade>
        {(WordsLoaded)
          ? (
            <WordsContainerContent
              getWords={getWords}
              HandleBackButtonClick={HandleBackButtonClick}
            />
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
        <TabList marginTop={['4', '2', null]}>
          {(AvailableWordType.noun) ? ((Object.keys(AvailableWordType).length)
            ? <Tab ref={NounTabButton} onClick={() => HandleTabClick('noun')} _hover={Tabshover} _selected={{ color, bg }} _focus={focusBorderColorGeneral} outline="none" outlineColor="initial" style={{ outlineStyle: 'none' }}>Noun</Tab>
            : <></>
          )
            : <></>}
          {(AvailableWordType.verb) ? ((Object.keys(AvailableWordType).length)
            ? <Tab ref={VerbTabButton} onClick={() => HandleTabClick('verb')} _hover={Tabshover} _selected={{ color, bg }} _focus={focusBorderColorGeneral} outline="none" outlineColor="initial" style={{ outlineStyle: 'none' }}>Verb</Tab>
            : <></>
          )
            : <></>}
          {(AvailableWordType.adjective) ? ((Object.keys(AvailableWordType).length)
            ? <Tab ref={AdjectiveTabButton} onClick={() => HandleTabClick('adjective')} _hover={Tabshover} _selected={{ color, bg }} _focus={focusBorderColorGeneral} outline="none" outlineColor="initial" style={{ outlineStyle: 'none' }}>Adjective</Tab>
            : <></>
          )
            : <></>}
        </TabList>
        {/* </Box> */}
        <TabPanels>
          <TabPanel>
            {TheWholeThesaurus()}
          </TabPanel>
          <TabPanel>
            {TheWholeThesaurus()}
          </TabPanel>
          <TabPanel>
            {TheWholeThesaurus()}
          </TabPanel>
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
