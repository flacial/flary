import { Fragment, useEffect, useRef } from 'react';
import {useLocation} from 'react-router-dom';
import styled from 'styled-components'
import tw from 'tailwind-styled-components';
import { chakra, Heading, Input, useColorMode, Button, Box, useColorModeValue, background } from '@chakra-ui/react'

const ThesaurusHeader = tw.h1`
    text-blue-500   
    italic
    font-serif
    text-3xl
    font-bold
    inline-block
`

const WordTypeContainer = styled.div`
border-radius: 29px;
background: linear-gradient(145deg, #ffffff, #e6e6e6);
box-shadow:  2px 2px 12px #37413f, -10px -10px 0px #3B82F6;
text-align: left;
width: auto;
height: auto;
padding-left: 20px;
padding-right: 20px;
padding-top: 5px;
padding-bottom: 5px;
margin: 3em;
word-spacing: 0;
`

const WordAndType = tw.div`
    mt-5
`

const TheWord = tw.h1`
    text-5xl
    text-gray-700
    font-serif
    font-bold
    inline-block
`

const TheType = tw.span`
    text-blue-500
    text-xl
    font-bold
    font-serif
`
const SynAntHeader = tw.h2`
    text-blue-600
    font-bold
    text-2xl
    mt-3
`

const SynAntContainer = tw.div`
    mt-2
    relative pl-6
`

const Example = tw.span`
    text-blue-500
    text-xl
    block
`

const Text = tw.span`
    text-gray-700
    text-xl
`

const LinkCSS = `
py-2
px-4
rounded-xl
shadow-xl
inline-block
focus:outline-none
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

  const LinkChak = chakra(Link)
  const bg = useColorModeValue('#edf2f7', '#303436')
  const color = useColorModeValue('#303436', '#edf2f7')

    return (
            <Fragment>
              <Box className='absolute top-0' >
                <LinkChak bg={bg} color={color} onClick={BackButtonClick} className={LinkCSS} to='/'>
                  Back to search
                </LinkChak>
              </Box>
              <WordTypeContainer>
                <ThesaurusHeader>
                  Thesaurus
                </ThesaurusHeader>
                <WordAndType>
                  <TheWord>
                    {ReturnedWord}
                  </TheWord>
                  <TheType>
                    {PartOfSpeech}
                  </TheType>
                </WordAndType>
                <SynAntHeader>
                  Synonyms & Antonyms of <em>{ReturnedWord}</em>
                </SynAntHeader>
                <SynAntContainer>
                  <span className='font-bold text-gray-700 text-xl absolute left-0 top-0'>1</span>
                  <Text>{ShortDef}</Text>
                  <Example> <strong>//</strong> {ReactHtmlParser(WordExample)} </Example>
                </SynAntContainer>
              </WordTypeContainer>
            </Fragment>
    )
}