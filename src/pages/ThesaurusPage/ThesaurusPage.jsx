/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import {
  useEffect, React, useRef,
} from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import {
  chakra,
  Box,
  useColorModeValue,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import WordsContainer from '../../components/words-container/words.container.component';
// import PopUpSearchBar from '../../components/popup-search-bar/popup-search-bar.component';
import LoadingSkeleton from '../../components/loading-skeleton/loading-skeleton.component';
import WordsContainerContent from '../../components/words-container-content/words-container-content';

const ThesaurusHeader = tw.h1`
    italic
    font-serif
    text-3xl
    font-bold
    inline-block
`;
const ChakraThesaurusHeader = chakra(ThesaurusHeader);

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
    WordExample,
    getPathName,
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
  const fontColorDarkWhiteSmallWords = useColorModeValue('#3B82F6', 'orange');
  const Tabshover = useColorModeValue({ color: '#3B82F6' }, { color: 'orange', boxShadow: '0 0 5px #FFF, 0 0 10px #FFF, 0 0 7px #FFF, 0 0 3px #49ff18, 0 0 5px #c75600, 0 0 10px #c75600, 0 0 10px #c75600, 0 0 20px #c75600' });
  const TabsSelected = useColorModeValue({ background: '#edf2f7', color: '#252d3d' }, { color: '#edf2f7', background: 'rgba(255, 255, 255, 0.08)', boxShadow: '0 0 5px #FFF, 0 0 10px #FFF, 0 0 7px #FFF, 0 0 3px #49ff18, 0 0 5px #c75600, 0 0 10px #c75600, 0 0 10px #c75600, 0 0 20px #c75600' });
  const fallbackBackground = useColorModeValue('rgba(255, 255, 255, .9)', 'rgba(0, 0, 0, 0.26)');
  const gradientbg = useColorModeValue('linear(to-l, gray.200, white)');
  const hoverShadowNeonDark = useColorModeValue({ background: 'gray.200' }, { boxShadow: '0 0 5px #FFF, 0 0 10px #FFF, 0 0 7px #FFF, 0 0 3px #49ff18, 0 0 5px #c75600, 0 0 10px #c75600, 0 0 10px #c75600, 0 0 20px #c75600' });
  const textShadow = useColorModeValue('0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.1), 0 10px 10px rgba(0,0,0,.2), 0 10px 10px rgba(0,0,0,.10);', '0 0 7px rgba(255,255,255,.5), 0 0 5px rgba(255,255,255,.5);');
  const WordsContainerShadow = useColorModeValue('-1px -1px 0 #CCCCCC, -1px -1px 0 #c9c9c9, -3px -3px 0 #bbb, -5px -5px 0 #b9b9b9, -5px -5px 0 #aaa, -6px -6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), -1px -1px 3px rgba(0,0,0,.3), -3px -3px 5px rgba(0,0,0,.2), -5px -5px 10px rgba(0,0,0,.1), -10px -10px 10px rgba(0,0,0,.2), -20px -20px 20px rgba(0,0,0,.10);', '0 0 7px rgba(255,255,255,.5), 0 0 5px rgba(255,255,255,.5);');
  const NounTabButton = useRef(null);
  const AdjectiveTabButton = useRef(null);
  const VerbTabButton = useRef(null);

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

  useEffect(() => {
    getPathName(location.pathname);
  });

  const HandleKeyDownBackButtonQctrl = (event) => {
    if (event.key === 'Q' && event.ctrlKey) {
      event.preventDefault();
      HandleBackButtonClick();
      history.push('/');
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
    <WordsContainer boxShadow={WordsContainerShadow} gradientbg={gradientbg} ml={['0', '9em', null]} mr={['0', '9em', null]} marginTop={['3', null, null]}>
      <ChakraThesaurusHeader color={fontColorDarkWhiteSmallWords}>
        Thesaurus
      </ChakraThesaurusHeader>
      {(WordsLoaded)
        ? (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <WordsContainerContent {...props} />
        )
        : (
          <LoadingSkeleton />
        )}
    </WordsContainer>
  );

  return (
    <>
      {ReturnedWord.length
        ? (
          <Box zIndex="9991" className="fixed top-0" left={[null, '32', null]}>
            <LinkChak _focus={hoverShadowNeonDark} bg={bg} color={color} boxShadow={textShadow} _hover={hoverShadowNeonDark} onClick={HandleBackButtonClick} className={LinkCSS} to="/">
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
            : <Tab mr="4" boxShadow={textShadow} ref={NounTabButton} onClick={() => HandleTabClick('noun')} _hover={Tabshover} _selected={TabsSelected} _focus={{ color }} outline="none" outlineColor="initial" style={{ outlineStyle: 'none' }}>Noun</Tab>
          )
            : <></>}
          {(AvailableWordType.verb) ? ((Object.keys(AvailableWordType).length === 1) ? <></>
            : <Tab mr="4" boxShadow={textShadow} ref={VerbTabButton} onClick={() => HandleTabClick('verb')} _hover={Tabshover} _selected={TabsSelected} _focus={{ color }} outline="none" outlineColor="initial" style={{ outlineStyle: 'none' }}>Verb</Tab>
          )
            : <></>}
          {(AvailableWordType.adjective) ? ((Object.keys(AvailableWordType).length === 1) ? <></>
            : <Tab boxShadow={textShadow} ref={AdjectiveTabButton} onClick={() => HandleTabClick('adjective')} _hover={Tabshover} _selected={TabsSelected} _focus={{ color }} outline="none" outlineColor="initial" style={{ outlineStyle: 'none' }}>Adjective</Tab>
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
