import { MainContainer } from '../MainContainer/MainContainer';
import { Heading } from '../Heading/Heading';
import InputContainer from '../InputContainer/InputContainer';
import WordInput from '../Input/inputs';
import { Button } from '../Button/Button';
import tw from 'tailwind-styled-components';

const ResetButton = tw(Button)`
  m-10
`

const Thesaurus = ({ getInputValue, getButtonClick, Link, PlusButtonClick }) => {
    return (
        <MainContainer>
              <Heading>Words to be thesaurused</Heading>
              <InputContainer>
                <WordInput onChange={getInputValue} placeholder="Type your words"/>
                    <Link to='/thesaurus'>
                  <Button onClick={getButtonClick}>
                      Search
                  </Button>
                    </Link>
              </InputContainer>
              <ResetButton onClick={PlusButtonClick}>
                      Reset
                  </ResetButton>
            </MainContainer>
    )
}

export default Thesaurus;