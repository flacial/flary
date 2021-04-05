/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import tw from 'tailwind-styled-components';
import { withRouter, Link as ReachLink } from 'react-router-dom';
import React from 'react';
import {
  Heading,
  Box,
  chakra,
  Fade,
  useColorModeValue,
  useMediaQuery,
  Button,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { connect } from 'react-redux';
import SearchInput from '../../components/search-input/search-input.component';
import ThesaurusDefinitionPopover from '../../components/thesaurus-definition/thesaurus-definition.component';

const MainContainer = tw.div`
   text-center
   mt-24
   md2:mt-38
   lg:mt-32
`;

const SearchPage = ({
  WordFindType, WordFind, isOpen, HandleSearchButtonClick, getWords,
}) => {
  const [isMoreThan420px] = useMediaQuery('(max-width: 420px)');
  const focusBorderColorGeneral = useColorModeValue({ boxShadow: '0 0 0 3px #3B82F6' }, { boxShadow: '0 0 0 3px orange' });

  return (
    <MainContainer>
      <Box display="flex" alignContent="center" justifyContent="center" mt={['12', null, '15', '0', '32']} mb={['5', null, '12']}>
        <Heading fontFamily="Playfair Display" fontSize={['3xl', '5xl', '6xl']} whiteSpace="nowrap">
          Words to be
          {(isMoreThan420px) ? '\u00A0' : ' thesaurused'}
        </Heading>
        <ThesaurusDefinitionPopover />
      </Box>
      <Box display={{ sm: 'flex', md: 'flex' }} justifyContent={[null, 'center', null]}>
        <Box>
          <Box justifyContent="center" display="flex" w={['100%', 'xs', null]}>
            <Box w={['18rem', 'xs', null]} position="relative">
              <SearchInput getWords={getWords} />
              <SearchIcon color="gray.300" position="absolute" left="3" top="3.5" />
            </Box>
          </Box>
          {WordFind
                && (
                <Fade in={isOpen}>
                  <Box mt="1" display="flex" justifyContent={['center', 'flex-start', null]} transition="ease">
                    <chakra.svg mt="1" ml={[null, '4', null]} outline="none" stroke="currentColor" fill="red.400" strokeWidth="0" viewBox="0 0 512 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M256,0C115.2,0,0,115.2,0,256s115.2,256,256,256s256-115.2,256-256S396.8,0,256,0z M256,51.2    c28.16,0,48.64,23.04,46.08,51.2L281.6,307.2h-51.2l-20.48-204.8C207.36,74.24,227.84,51.2,256,51.2z M256,460.8    c-28.16,0-51.2-23.04-51.2-51.2c0-28.16,23.04-51.2,51.2-51.2s51.2,23.04,51.2,51.2C307.2,437.76,284.16,460.8,256,460.8z" />
                    </chakra.svg>
                    <chakra.span ml="1" mb={['-1', 0, 0]} color="red.400">
                      {(WordFindType === 'no response' ? 'Word not found! (Misspelled)' : ((WordFindType === 'no input') ? 'Input is empty, type a word!' : 'The word is not in the thesaurus!'))}
                    </chakra.span>
                  </Box>
                </Fade>
                )}
        </Box>

        {
          !isMoreThan420px && (
            <Box ml={[0, 6, null]} mt={[5, 1, 0]}>
              <Button
                _hover={{ background: 'gray.200' }}
                _focus={focusBorderColorGeneral}
                color="gray.800"
                bgColor="gray.100"
                as={ReachLink}
                onClick={HandleSearchButtonClick}
                to="/thesaurus"
                borderRadius="xl"
              >
                Search
              </Button>
            </Box>
          )
        }
      </Box>
    </MainContainer>
  );
};
const mapStateToProps = ({ words }) => ({
  Word: words.Word,
});

export default connect(mapStateToProps, null)(withRouter(SearchPage));
