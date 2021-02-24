import tw from 'tailwind-styled-components';
import {useLocation} from 'react-router-dom';
import { useEffect } from 'react'
import { Heading, Input, useColorMode, Button, Box } from '@chakra-ui/react'
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
const SearchPage = ({ getInputValue, getButtonClick, Link, getPathName }) => {
  const location = useLocation()
  useEffect(() => {
    getPathName(location.pathname)
  })

    return (
        <MainContainer>
              <Heading fontFamily='Playfair Display' fontStyle='italic' fontSize={['3xl', '5xl', '6xl']} mt={['12', null, '32']} mb={['5', null, '12']} whiteSpace='nowrap' >Words to be thesaurused</Heading>
              <Box display={{ md: "flex"}} justifyContent={[null, 'center', null]} >
              <Box>
                <Input variant='filled' w={['16rem', 'xs', null]} rounded='xl' mr={[null, null, '2rem']} onChange={getInputValue} placeholder="Type your word"/>
              </Box>
              <Box mt={[5, 5, 0]} >
                    <Link onClick={getButtonClick} className={LinkCSS}
                        to='/thesaurus'>
                      Search
                    </Link>

              </Box>
              </Box>
            </MainContainer>
    )
}

export default SearchPage;
