/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import tw from 'tailwind-styled-components';
import { withRouter, Link as ReachLink } from 'react-router-dom';
import React from 'react';
import {
  Heading,
  Box,
  useColorModeValue,
  useMediaQuery,
  Button,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { connect } from 'react-redux';
import SearchInput from '../../components/search-input/search-input.component';
import ThesaurusDefinitionPopover from '../../components/thesaurus-definition/thesaurus-definition.component';
import ErrorMessage from '../../components/error-message/error-message.component';

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
                <ErrorMessage WordFindType={WordFindType} isOpen={isOpen} />
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
