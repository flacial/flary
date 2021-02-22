import { MainContainer } from '../MainContainer/MainContainer';
import { Heading } from '../Heading/Heading';
import InputContainer from '../InputContainer/InputContainer';
import WordInput from '../Input/inputs';
import { Button } from '../Button/Button';
import tw from 'tailwind-styled-components';
import {useLocation} from 'react-router-dom';
import { useEffect } from 'react'

const ResetButton = tw(Button)`
  m-10
`

const Thesaurus = ({ getInputValue, getButtonClick, Link, getPathName }) => {
    const location = useLocation()
    useEffect(() => {
      getPathName(location.pathname)
    })
    return (
        <MainContainer>
              <Heading>Words to be thesaurused</Heading>
              <InputContainer>
                <WordInput onChange={getInputValue} placeholder="Type your word"/>
                    <Link onClick={getButtonClick} className='
                        bg-gradient-to-b
                        from-green-400
                        to-green-700
                        text-gray-100
                        font-bold
                        py-2
                        px-6
                        rounded-full
                        shadow-2xl
                        inline-block
                        focus:outline-none
                        focus:ring-2 focus:ring-green-100
                        hover:bg-gradient-to-b
                        hover:from-green-600
                        hover:to-green-800
                        '
                        to='/thesaurus'>
                    Search
                    </Link>
              </InputContainer>
            </MainContainer>
    )
}

export default Thesaurus;