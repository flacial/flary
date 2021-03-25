/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
// import { Presets } from 'react-component-transition';
import tw from 'tailwind-styled-components';
import ReactHtmlParser from 'react-html-parser';
import { withRouter } from 'react-router-dom';
import {
  chakra,
  Heading,
  UnorderedList,
  useColorModeValue,
  Box,
  ListItem,
} from '@chakra-ui/react';

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

const WordsContainerContent = (
  props,
) => {
  const {
    ReturnedWord,
    PartOfSpeech,
    ShortDef,
    WordExample,
    Syns,
    Ants,
    getWords,
    HandleBackButtonClick,
    history,
  } = props;

  const fontColorMain = useColorModeValue('gray.700', '#edf2f7');
  const fontColorHeaders = useColorModeValue('#2563EB', '#db8b02');
  const fontColorSynAnt = useColorModeValue('#3B82F6', 'orange.300');
  const fontColorDarkWhiteSmallWords = useColorModeValue('#3B82F6', 'orange');
  const hoverSynAntItems = useColorModeValue({ textDecoration: 'underline' }, { textDecoration: 'underline' });

  const onClickWords = (event) => {
    HandleBackButtonClick();
    getWords(event.target.textContent);
    history.push('/thesaurus');
  };
  // Change synonyms and antonyms words to list items
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
  const OrderSynonyms = () => turnWordInToList(Syns);
  const OrderAntonyms = () => turnWordInToList(Ants);

  return (
    <>
      <WordAndType>
        <ChakraTheWord color={fontColorMain}>
          {ReturnedWord}
        </ChakraTheWord>
        <ChakraTheType color={fontColorDarkWhiteSmallWords}>
          {PartOfSpeech}
        </ChakraTheType>
      </WordAndType>
      <ChakraSynAntHeader color={fontColorHeaders}>
        Synonyms & Antonyms of
        {' '}
        <em>{ReturnedWord}</em>
      </ChakraSynAntHeader>
      <SynAntContainer>
        <ChakraText color={fontColorMain}>
          {ShortDef}
        </ChakraText>
        {(ShortDef.slice(0, 5) === WordExample.slice(0, 5))
          ? <></>
          : (
            <ChakraExample color={fontColorSynAnt}>
              {' '}
              <strong>//</strong>
              {' '}
              {ReactHtmlParser(WordExample)}
            </ChakraExample>
          )}
        <Heading mb="1" mt="2" fontSize="2xl" fontFamily="sans-serif" color={fontColorHeaders}>
          Synonyms for
          {' '}
          <chakra.span fontStyle="italic">{ReturnedWord}</chakra.span>
        </Heading>
        <Box w={['100%', '70%', null]}>
          <UnorderedList fontFamily="sans" fontSize="lg" ml="0" color={fontColorSynAnt}>{OrderSynonyms()}</UnorderedList>
        </Box>
        {(Ants !== undefined)
          ? (
            <div>
              <Heading mb="1" mt="4" fontSize="2xl" fontFamily="sans-serif" color={fontColorHeaders}>
                Antonyms for
                {' '}
                <chakra.span fontStyle="italic">{ReturnedWord}</chakra.span>
              </Heading>
              <Box w={['100%', '70%', null]}>
                <UnorderedList fontFamily="sans" fontSize="lg" ml="0" color={fontColorSynAnt}>{OrderAntonyms()}</UnorderedList>
              </Box>
            </div>
          )
          : <></>}
      </SynAntContainer>
    </>
  );
};

export default withRouter(WordsContainerContent);
