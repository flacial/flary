import { Fragment, useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import styled from 'styled-components'
import tw from 'tailwind-styled-components';
import { useColorModeValue } from '@chakra-ui/react';

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
box-shadow:  5px 5px 10px #ededed,
             -5px -5px 10px #ffffff;
text-align: left;
width: auto;
height: auto;
padding-left: 20px;
padding-right: 20px;
padding-top: 5px;
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
bg-gray-100
text-gray-800
py-2
px-4
rounded-xl
shadow-xl
inline-block
focus:outline-none
focus:ring-2 focus:ring-blue-400
hover:bg-gray-300
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
    return (
            <Fragment>
              <div className='absolute top-0' >
              <Link onClick={BackButtonClick} className={LinkCSS} to='/'>
                Back to search
              </Link>
              </div>
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