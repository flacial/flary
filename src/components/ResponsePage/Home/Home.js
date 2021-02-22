import { Fragment } from 'react';
import { WordTypeContainer } from '../WordTypeContainer/WordTypeContainer';
import { ThesaurusHeader } from '../ThesaurusHeader/ThesaurusHeader';
import { TheWord, WordAndType, TheType } from '../WordAndType/WordAndType';
import { SynAntHeader } from '../SynAntHeader/SynAntHeader';
import { SynAntContainer } from '../SynAntContainer/SynAntContainer';
import { Example } from '../Examples/Example';
import { Text } from '../../RequestPage/Text/Text';
import {useLocation} from 'react-router-dom';
import { useEffect } from 'react'

export const Home = (
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
              <div className='flex justify-end' >
              <Link onClick={BackButtonClick} className='
                        bg-gradient-to-b
                        from-green-400
                        to-green-700
                        font-bold
                        py-2
                        px-6
                        rounded-full
                        shadow-2xl
                        inline-block
                        focus:outline-none
                        focus:ring-2 focus:ring-green-100
                        m-6
                        text-gray-100
                        hover:bg-gradient-to-b
                        hover:from-green-600
                        hover:to-green-800
                        '
                        to='/'>
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
              <span className='font-bold text-xl mr-5'>1</span>
              <Text>{ShortDef}</Text>
              <Example> <strong>//</strong> {ReactHtmlParser(WordExample)} </Example>
            </SynAntContainer>
            </WordTypeContainer>
            </Fragment>
    )
}