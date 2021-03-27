/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import {
  useEffect, React,
} from 'react';
import { withRouter } from 'react-router-dom';
import {
  chakra,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import WordsTabs from '../../components/tabs/tabs.component';

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
    WordsLoaded,
    Syns,
    Ants,
    HandleTabClick,
    AvailableWordType,
    getWords,
    history,
    location,
  } = props;
  const LinkChak = chakra(Link);
  const bg = useColorModeValue('#edf2f7', 'rgba(255, 255, 255, 0.08)');
  const color = useColorModeValue('#252d3d', '#edf2f7');
  const hover = useColorModeValue({ background: 'gray.200' }, { background: 'gray.700' });
  const focusBorderColorGeneral = useColorModeValue({ boxShadow: '0 0 0 3px #3B82F6' }, { boxShadow: '0 0 0 3px orange' });
  const fallbackBackground = useColorModeValue('rgba(255, 255, 255, .9)', 'rgba(0, 0, 0, 0.26)');

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
      <WordsTabs
        AvailableWordType={AvailableWordType}
        HandleTabClick={HandleTabClick}
        PartOfSpeech={PartOfSpeech}
        ShortDef={ShortDef}
        WordExample={WordExample}
        WordsLoaded={WordsLoaded}
        Syns={Syns}
        Ants={Ants}
        getWords={getWords}
        HandleBackButtonClick={HandleBackButtonClick}
        ReturnedWord={ReturnedWord}
      />
    </>
  );
};

export default withRouter(ThesaurusPage);
