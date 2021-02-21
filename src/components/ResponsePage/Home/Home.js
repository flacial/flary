import { Fragment } from 'react';
import { BackButton } from '../BackButton/BackButton';
import { WordTypeContainer } from '../WordTypeContainer/WordTypeContainer';
import { ThesaurusHeader } from '../ThesaurusHeader/ThesaurusHeader';
import { TheWord, WordAndType, TheType } from '../WordAndType/WordAndType';
import { SynAntHeader } from '../SynAntHeader/SynAntHeader';
import { SynAntContainer } from '../SynAntContainer/SynAntContainer';
import { Example } from '../Examples/Example';
import { Text } from '../../RequestPage/Text/Text';

export const Home = (
    {
        Word,
        Link,
        BackButtonClick,
        ReturnedWord,
        PartOfSpeech,
        ShortDef,
        ReactHtmlParser,
        WordExample,
        Redirect
}) => {
    return (
            <Fragment>
              <div className='flex justify-end' >
              <Link to='/'>
              <BackButton onClick={BackButtonClick} >
                Back to search
              </BackButton>
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