import { Fragment, useEffect, useRef } from 'react';
import {useLocation} from 'react-router-dom';
import styled from 'styled-components'
import tw from 'tailwind-styled-components';
import { chakra, Heading, Input, useColorMode, Button, Box, useColorModeValue } from '@chakra-ui/react'

const ThesaurusHeader = tw.h1`
    italic
    font-serif
    text-3xl
    font-bold
    inline-block
`
const ChakraThesaurusHeader = chakra(ThesaurusHeader)

const WordTypeContainer = styled.div`
border-radius: 29px;
text-align: left;
width: auto;
height: auto;
padding-left: 20px;
padding-right: 20px;
padding-top: 5px;
padding-bottom: 5px;
word-spacing: 0;
`

const ChakraWordTypeContainer = chakra(WordTypeContainer)

const WordAndType = tw.div`
    mt-5
`

const TheWord = tw.h1`
    text-5xl
    font-serif
    font-bold
    inline-block
`

const ChakraTheWord = chakra(TheWord)


const TheType = tw.span`
    text-xl
    font-bold
    font-serif
`

const ChakraTheType = chakra(TheType)

const SynAntHeader = tw.h2`
    font-bold
    text-2xl
    mt-3
`

const ChakraSynAntHeader = chakra(SynAntHeader)

const SynAntContainer = tw.div`
    mt-2
    relative pl-6
`

const Example = tw.span`
    text-xl
    block
`

const ChakraExample = chakra(Example)

const Text = tw.span`
    text-gray-700
    text-xl
`

const ChakraText = chakra(Text)

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
`

export const ThesaurusPage = (
    {
        Link,
        BackButtonClick,
        ReturnedWord,
        PartOfSpeech,
        ShortDef,
        ReactHtmlParser,
        WordExample,
        getPathName
}) => {
  
  const location = useLocation()
  useEffect(() => {
    getPathName(location.pathname)
  })

  const LinkChak = chakra(Link);
  const bg = useColorModeValue('#edf2f7', 'rgba(255, 255, 255, 0.08)');
  const color = useColorModeValue('#252d3d', '#edf2f7');
  const fontColorMain = useColorModeValue('gray.700', '#edf2f7')
  const fontColorHeaders = useColorModeValue('#2563EB', '#db8b02')
  const fontColorDarkWhiteSmallWords = useColorModeValue('#3B82F6', 'orange')
  const hover = useColorModeValue({background: "gray.200"}, {background: "gray.700"});
  const gradientbg = useColorModeValue('linear(to-l, gray.200, white)')
  const boxShadow = useColorModeValue('2px 2px 12px #37413f, -10px -10px 0px #3B82F6', '2px 2px 12px #37413f, -10px -10px 0px orange')

    return (
            <Fragment>
              <Box className='absolute top-0'>
                <LinkChak bg={bg} color={color} _hover={hover} onClick={BackButtonClick} className={LinkCSS} to='/'>
                  Back to search
                </LinkChak>
              </Box>
              <ChakraWordTypeContainer boxShadow={boxShadow} bgGradient={gradientbg} m={['1em','3em',null]} marginTop={['20', null, null]} >
                <ChakraThesaurusHeader color={fontColorDarkWhiteSmallWords}>
                  Thesaurus
                </ChakraThesaurusHeader>
                <WordAndType>
                  <ChakraTheWord color={fontColorMain} >
                    {ReturnedWord}
                  </ChakraTheWord>
                  <ChakraTheType color={fontColorDarkWhiteSmallWords}>
                    {PartOfSpeech}
                  </ChakraTheType>
                </WordAndType>
                <ChakraSynAntHeader color={fontColorHeaders} >
                  Synonyms & Antonyms of <em>{ReturnedWord}</em>
                </ChakraSynAntHeader>
                <SynAntContainer>
                  <chakra.span color={fontColorMain} className='font-bold text-xl absolute left-0 top-0'>1</chakra.span>
                  <ChakraText color={fontColorMain} >{ShortDef}</ChakraText>
                  <ChakraExample color={fontColorDarkWhiteSmallWords}> <strong>//</strong> {ReactHtmlParser(WordExample)} </ChakraExample>
                </SynAntContainer>
              </ChakraWordTypeContainer>
            </Fragment>
    )
}