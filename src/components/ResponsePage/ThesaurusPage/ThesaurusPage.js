import { Fragment } from 'react';
import { WordTypeContainer } from '../WordTypeContainer/WordTypeContainer';
import { ThesaurusHeader } from '../ThesaurusHeader/ThesaurusHeader';
import { TheWord, WordAndType, TheType } from '../WordAndType/WordAndType';
import { SynAntHeader } from '../SynAntHeader/SynAntHeader';
import { SynAntContainer } from '../SynAntContainer/SynAntContainer';
import { Example } from '../Examples/Example';
import { Text } from '../Text/Text';
import {useLocation} from 'react-router-dom';
import { useEffect } from 'react'

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