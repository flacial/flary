import tw from 'tailwind-styled-components';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react'
import {  } from '@chakra-ui/react'
import {
  Heading, Input, Button, Box,
  chakra,
  Fade,
  ScaleFade
} from "@chakra-ui/react"


export const MainContainer = tw.div`
   text-center
   m-auto
`

export const WordInput = tw.input`
  rounded-full
  px-10
  text-center
  outline-none
  focus:ring-4 focus:ring-green-500
  lg:mr-3
`
const LinkCSS = `
bg-gray-100
text-gray-800
py-1
px-3
rounded-xl
shadow-2xl
inline-block
md:py-1
md:h-8
md:mt-1
md:px-4
focus:outline-none
focus:ring-2 focus:ring-blue-400
hover:bg-gray-200
transition duration-200 ease-in-out
`



const SearchPage = ({ WordFindType, onEnterKeyPress, WordFind, isOpen, onClose, cancelRef, getInputValue, getButtonClick, Link, getPathName }) => {
  const location = useLocation()
  useEffect(() => {
    getPathName(location.pathname)
  })

  const LinkChak = chakra(Link)


    return (
        <MainContainer>
              <Heading fontFamily='Playfair Display' fontSize={['3xl', '5xl', '6xl']} mt={['12', null, '32']} mb={['5', null, '12']} whiteSpace='nowrap' >Words to be thesaurused</Heading>
              <Box display={{ md: "flex"}} justifyContent={[null, 'center', null]} >
              <Box>
                <Input onKeyPress={onEnterKeyPress} variant='filled' w={['16rem', 'xs', null]} rounded='xl' mr={[null, null, '2rem']} onChange={getInputValue} placeholder="Type your word"/>
              {WordFind
              &&
              <Fade in={isOpen} >
               <Box mt='1' display='flex' justifyContent={['center','flex-start', null]} transition='ease'>
                  <chakra.svg mt='1' ml={[null,'4', null]} outline='none' stroke="currentColor" fill="red.400" strokeWidth="0" viewBox="0 0 512 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M256,0C115.2,0,0,115.2,0,256s115.2,256,256,256s256-115.2,256-256S396.8,0,256,0z M256,51.2    c28.16,0,48.64,23.04,46.08,51.2L281.6,307.2h-51.2l-20.48-204.8C207.36,74.24,227.84,51.2,256,51.2z M256,460.8    c-28.16,0-51.2-23.04-51.2-51.2c0-28.16,23.04-51.2,51.2-51.2s51.2,23.04,51.2,51.2C307.2,437.76,284.16,460.8,256,460.8z">
                  </path>
                  </chakra.svg>
                  <chakra.span ml='1' color='red.400' >
                  {(WordFindType === 'no response' ? 'Word not found!' : ( (WordFindType === 'no input') ? 'Input is empty, type a word!' : 'API Side Error' ))}
                  </chakra.span>
                </Box>
               </Fade>} 
              </Box>
              <Box mt={[5, 5, 0]} >
                    <LinkChak onClick={getButtonClick} className={LinkCSS}
                        to='/thesaurus'>
                      Search
                    </LinkChak>

              </Box>
              </Box>
            </MainContainer>
    )
}

export default SearchPage;
