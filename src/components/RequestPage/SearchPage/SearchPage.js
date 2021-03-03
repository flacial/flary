import tw from 'tailwind-styled-components';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react'
import {
  Heading, 
  Input, 
  Box,
  chakra,
  Fade,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  useDisclosure,
  useColorModeValue,
  IconButton,
  useMediaQuery,
  Button
} from "@chakra-ui/react"
import { QuestionIcon, MoonIcon } from "@chakra-ui/icons"

const MainContainer = tw.div`
   text-center
   mt-40
   sm:mt-0
   md2:mt-38
   lg:mt-32
`

const LinkCSS = `
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

const SearchPage = ({ WordFindType, onEnterKeyPress, WordFind, isOpen,
   getInputValue, getButtonClick, Link, getPathName }) => {
  const [ isMoreThan420px ] = useMediaQuery("(max-width: 420px)")
  const location = useLocation()
  const LinkChak = chakra(Link)
  const { isOpen: isLaunch, onOpen: onLunch, onClose: onExit } = useDisclosure()
  const fontColorDarkWhiteSmallWords = useColorModeValue('#3B82F6', 'orange')
  const hover = useColorModeValue({color: '#3B82F6'}, {color: 'orange'});
  const fontColorMain = useColorModeValue('#edf2f7', 'gray.800')
  const focusBorderColorInput = useColorModeValue('#3B82F6', 'orange.400')
  const focusBorderColorGeneral = useColorModeValue({boxShadow: '0 0 0 3px #3B82F6'}, {boxShadow: '0 0 0 3px orange'})
  useEffect(() => {
    getPathName(location.pathname)
  })

    return (
        <MainContainer>
        <Box display='flex' alignContent='center' justifyContent='center' mt={['12', null, '15', '0', '32']} mb={['5', null, '12']}>
            <Heading fontFamily='Playfair Display' fontSize={['3xl', '5xl', '6xl']} whiteSpace='nowrap' >Words to be 
            {(isMoreThan420px) ? '\u00A0' : ' thesaurused'}
            </Heading>
            <Popover placement="top-end" display='inline-block'>
              <PopoverTrigger >
              {(isMoreThan420px) 
              ?
              <Heading textDecoration={`underline wavy ${fontColorDarkWhiteSmallWords}`} _hover={[null, null, hover]} cursor='pointer' fontFamily='Playfair Display' fontSize={['3xl', '5xl', '6xl']} whiteSpace='nowrap' >thesaurused</Heading>
              :
              <IconButton variant='ghost' outline='none' outlineColor='initial' style={{outlineStyle: 'none' }} _focus={focusBorderColorGeneral} ml='2' outline='none' size='sm' icon={<QuestionIcon w='5' h='5' />} />
              }
              </PopoverTrigger>
              <PopoverContent  _focus={focusBorderColorGeneral} background='gray.800' >
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader fontFamily='Playfair Display' fontSize={['xl']} fontWeight='bold'>Thesaurus</PopoverHeader>
                <PopoverBody>A thesaurus (plural thesauri or thesauruses) or synonym dictionary is a reference work for finding synonyms and sometimes antonyms of words. </PopoverBody>
              </PopoverContent>
            </Popover>
        </Box>
            <Box display={{ sm:'flex', md: "flex"}} justifyContent={[null, 'center', null]} >
              <Box>
                <Input focusBorderColor={focusBorderColorInput} onKeyPress={onEnterKeyPress} variant='filled' w={['16rem', 'xs', null]} rounded='xl' mr={[null, null, '2rem']} onChange={getInputValue} placeholder="Type your word"/>
                {WordFind
                &&
                <Fade in={isOpen} >
                <Box mt='1' display='flex' justifyContent={['center','flex-start', null]} transition='ease'>
                    <chakra.svg mt='1' ml={[null,'4', null]} outline='none' stroke="currentColor" fill="red.400" strokeWidth="0" viewBox="0 0 512 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M256,0C115.2,0,0,115.2,0,256s115.2,256,256,256s256-115.2,256-256S396.8,0,256,0z M256,51.2    c28.16,0,48.64,23.04,46.08,51.2L281.6,307.2h-51.2l-20.48-204.8C207.36,74.24,227.84,51.2,256,51.2z M256,460.8    c-28.16,0-51.2-23.04-51.2-51.2c0-28.16,23.04-51.2,51.2-51.2s51.2,23.04,51.2,51.2C307.2,437.76,284.16,460.8,256,460.8z">
                      </path>
                    </chakra.svg>
                    <chakra.span ml='1' mb={['-1',0, 0]} color='red.400' >
                    {(WordFindType === 'no response' ? 'Word not found! (Misspelled)' : ((WordFindType === 'no input') ? 'Input is empty, type a word!' : 'The word is not in the thesaurus!' ))}
                    </chakra.span>
                  </Box>
                </Fade>} 
              </Box>
              <Box ml={[0, 5, 0]} mt={[5, 1, 0]} >
                <LinkChak _hover={{background: "gray.200"}} _focus={focusBorderColorGeneral} color={
                  // [fontColorMain, 'gray.800', null]
                  (isMoreThan420px) 
                  ?
                  fontColorMain
                  :
                  'gray.800'
                } bgColor={
                  // [fontColorDarkWhiteSmallWords, 'gray.100', null ]
                  (isMoreThan420px) 
                  ?
                  fontColorDarkWhiteSmallWords
                  :
                  'gray.100'
                  } fontWeight='semibold' onClick={getButtonClick} className={LinkCSS}
                    to='/thesaurus'>
                  Search
                </LinkChak>
              </Box>
            </Box>
        </MainContainer>
    )
}

export default SearchPage;
