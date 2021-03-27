/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import {
  useEffect, React, useState, useRef,
} from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import {
  chakra,
  Box,
  useColorModeValue,
  SkeletonText,
  Heading,
  ListItem,
  UnorderedList,
  useMediaQuery,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Skeleton,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { Presets } from 'react-component-transition';
import LoadingSkeleton from '../../components/loading-skeleton/loading-skeleton.component';
import WordsContainer from '../../components/words-container/words.container.component';
import WordsContainerContent from '../../components/words-container-content/words-container-content';
import PopUpSearchBar from '../../components/popup-search-bar/popup-search-bar.component';

const ThesaurusHeader = tw.h1`
    italic
    font-serif
    text-3xl
    font-bold
    inline-block
`;
const ChakraThesaurusHeader = chakra(ThesaurusHeader);

const WordAndType = tw.div`
    mt-1
`;

const TheWord = tw.h1`
    text-5xl
    font-serif
    font-bold
    inline-block
`;

const ChakraTheWord = chakra(TheWord);

const TheType = tw.span`
    text-xl
    font-bold
    font-serif
`;

const ChakraTheType = chakra(TheType);

const SynAntHeader = tw.h2`
    font-bold
    text-2xl
    mt-3
`;

const ChakraSynAntHeader = chakra(SynAntHeader);

const SynAntContainer = tw.div`
    mt-2
    relative pl-6
`;

const Example = tw.span`
    text-xl
    block
`;

const ChakraExample = chakra(Example);

const Text = tw.span`
    text-gray-700
    text-xl
`;

const ChakraText = chakra(Text);

const LinkCSS = `
  py-2
  px-4
  rounded-xl
  shadow-xl
  inline-block
  focus:outline-none
  focus:border
  focus:ring-2 focus:ring-blue-500
  transition duration-500 ease-in-out
  m-4
`;

const ThesaurusPage = (props) => {
  const {
    Link,
    HandleBackButtonClick,
    ReturnedWord,
    PartOfSpeech,
    ShortDef,
    ReactHtmlParser,
    WordExample,
    WordsLoaded,
    Syns,
    Ants,
    HandleTabClick,
    AvailableWordType,
    getWords,
    history,
  } = props;
  const LinkChak = chakra(Link);
  const bg = useColorModeValue('#edf2f7', 'rgba(255, 255, 255, 0.08)');
  const color = useColorModeValue('#252d3d', '#edf2f7');
  const fontColorMain = useColorModeValue('gray.700', '#edf2f7');
  const fontColorHeaders = useColorModeValue('#2563EB', '#db8b02');
  const fontColorDarkWhiteSmallWords = useColorModeValue('#3B82F6', 'orange');
  const fontColorSynAnt = useColorModeValue('#3B82F6', 'orange.300');
  const hover = useColorModeValue({ background: 'gray.200' }, { background: 'gray.700' });
  const hoverSynAntItems = useColorModeValue({ textDecoration: 'underline' }, { textDecoration: 'underline' });
  const SkeletonStartColor = useColorModeValue('#3B82F6', 'orange.200');
  const SkeletonEndColor = useColorModeValue('gray.700', 'orange.500');
  const focusBorderColorGeneral = useColorModeValue({ boxShadow: '0 0 0 3px #3B82F6' }, { boxShadow: '0 0 0 3px orange' });
  const Tabshover = useColorModeValue({ color: '#3B82F6' }, { color: 'orange' });
  const fallbackBackground = useColorModeValue('rgba(255, 255, 255, .9)', 'rgba(0, 0, 0, 0.26)');
  const gradientbg = useColorModeValue('linear(to-l, gray.200, white)');
  const boxShadow = useColorModeValue('0px 0px 25px #a1a1a1, -10px -10px 0px #3B82F6', '0px 0px 11px #1c1c1c, -10px -10px 0px orange');
  const NounTabButton = useRef(null);
  const VerbTabButton = useRef(null);
  const AdjectiveTabButton = useRef(null);

  const onClickWords = (event) => {
    HandleBackButtonClick();
    getWords(event.target.textContent);
    history.push('/thesaurus');
  };

  const turnWordInToList = (MainObj) => {
    let ReturnedObj = [];
    if (MainObj !== undefined) {
      ReturnedObj = MainObj.map((word, index) => {
        if (MainObj[index + 1] === undefined) {
          return <ListItem _hover={hoverSynAntItems} className="cursor-pointer" onClick={onClickWords} listStyleType="none" display="inline-block" key={index}>{word}</ListItem>;
        }
        return (
          <>
            <ListItem _hover={hoverSynAntItems} className="cursor-pointer" onClick={onClickWords} listStyleType="none" display="inline-block" key={word}>{word}</ListItem>
            <span key={index}>{',\u00A0'}</span>
          </>
        );
      });
    }
    return ReturnedObj;
  };

  const location = useLocation();

  const changeTitle = (ComponentState) => {
    const initialTitle = 'Thesaurus By Flary';
    if (ComponentState === 'mount') {
      document.title = ReturnedWord.length ? `${ReturnedWord[0].toUpperCase() + ReturnedWord.slice(1)} Synonyms, ${ReturnedWord} Antonyms | Flary Thesaurus` : initialTitle;
    } else {
      document.title = initialTitle;
    }
  };

  useEffect(() => {
    changeTitle('mount');
    return () => {
      changeTitle();
    };
  }, [ReturnedWord]);

  const HandleKeyDownBackButtonQctrl = (event) => {
    if (event.key === 'Q' && event.ctrlKey) {
      HandleBackButtonClick();
      history.push('/');
    }
  };

  const HandleKeyDownTabsButton123 = (event) => {
    switch (event.key) {
      case '!':
        event.preventDefault();
        NounTabButton.current.click();
        break;
      case '@':
        event.preventDefault();
        VerbTabButton.current.click();
        break;
      case '#':
        event.preventDefault();
        AdjectiveTabButton.current.click();
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

  useEffect(() => {
    document.addEventListener('keydown', HandleKeyDownBackButtonQctrl);
    return () => {
      document.removeEventListener('keydown', HandleKeyDownBackButtonQctrl);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const TheWholeThesaurus = () => (
    <WordsContainer boxShadow={boxShadow} gradientbg={gradientbg} ml={['0', '9em', null]} mr={['0', '9em', null]} marginTop={['3', null, null]}>
      <ChakraThesaurusHeader color={fontColorDarkWhiteSmallWords}>
        Thesaurus
      </ChakraThesaurusHeader>
      <Presets.TransitionFade>
        {(WordsLoaded)
          ? (
            <WordsContainerContent
              ReturnedWord={ReturnedWord}
              PartOfSpeech={PartOfSpeech}
              ShortDef={ShortDef}
              WordExample={WordExample}
              Syns={Syns}
              Ants={Ants}
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
      {ReturnedWord.length
        ? (
          <Box zIndex="9991" className="fixed top-0" left={[null, '32', null]}>
            <LinkChak _focus={focusBorderColorGeneral} bg={bg} color={color} _hover={hover} onClick={HandleBackButtonClick} className={LinkCSS} to="/">
              Back to search
            </LinkChak>
          </Box>
        )
        : <></>}
      {(location.pathname === '/thesaurus')
        ? (
          <Box
            background={!(CSS.supports('backdrop-filter', 'blur(5px)'))
                  && fallbackBackground}
            className="backdrop-blur"
            zIndex="9990"
            position="fixed"
            top="0"
            h="70px"
            w="full"
            borderRadius="0 0 20px 20px"
          />
        )
        // TODO Break tabs into its own compoonent
        : <></>}

      <Tabs align="center" variant="soft-rounded">
        {/* <Box className='backdrop-blur z-50' display='flex'
         justifyContent='center' h='22' width='full'  position='fixed' bottom='0'> */}
        <TabList marginTop={['4', '2', null]}>
          {(AvailableWordType.noun) ? ((Object.keys(AvailableWordType).length === 1) ? <></>
            : <Tab ref={NounTabButton} onClick={() => HandleTabClick('noun')} _hover={Tabshover} _selected={{ color, bg }} _focus={focusBorderColorGeneral} outline="none" outlineColor="initial" style={{ outlineStyle: 'none' }}>Noun</Tab>
          )
            : <></>}
          {(AvailableWordType.verb) ? ((Object.keys(AvailableWordType).length === 1) ? <></>
            : <Tab ref={VerbTabButton} onClick={() => HandleTabClick('verb')} _hover={Tabshover} _selected={{ color, bg }} _focus={focusBorderColorGeneral} outline="none" outlineColor="initial" style={{ outlineStyle: 'none' }}>Verb</Tab>
          )
            : <></>}
          {(AvailableWordType.adjective) ? ((Object.keys(AvailableWordType).length === 1) ? <></>
            : <Tab ref={AdjectiveTabButton} onClick={() => HandleTabClick('adjective')} _hover={Tabshover} _selected={{ color, bg }} _focus={focusBorderColorGeneral} outline="none" outlineColor="initial" style={{ outlineStyle: 'none' }}>Adjective</Tab>
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

export default withRouter(ThesaurusPage);
