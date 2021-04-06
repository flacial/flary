/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import {
  Heading,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  IconButton,
  useMediaQuery,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { InfoIcon } from '@chakra-ui/icons';

const ThesaurusDefinitionPopover = () => {
  const [isMoreThan420px] = useMediaQuery('(max-width: 420px)');
  const fontColorDarkWhiteSmallWords = useColorModeValue('#3B82F6', 'orange');
  const hover = useColorModeValue({ color: '#3B82F6' }, { color: 'orange' });
  const fontColorMain = useColorModeValue('#edf2f7', 'gray.800');
  const focusBorderColorGeneral = useColorModeValue({ boxShadow: '0 0 0 3px #3B82F6' }, { boxShadow: '0 0 0 3px orange' });

  return (
    <>
      <Popover placement="auto-end" display="inline-block">
        <PopoverTrigger>
          {(isMoreThan420px)
            ? <Heading textDecoration={`underline wavy ${fontColorDarkWhiteSmallWords}`} _hover={[null, null, hover]} cursor="pointer" fontFamily="Playfair Display" fontSize={['3xl', '5xl', '6xl']} whiteSpace="nowrap">thesaurused</Heading>
            : <IconButton variant="ghost" outline="none" outlineColor="initial" style={{ outlineStyle: 'none' }} _focus={focusBorderColorGeneral} ml="2" size="sm" icon={<InfoIcon w="5" h="5" />} />}
        </PopoverTrigger>
        <PopoverContent outline="none" outlineColor="initial" style={{ outlineStyle: 'none' }} _focus={focusBorderColorGeneral} background={fontColorMain}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader fontFamily="Playfair Display" fontSize={['xl']} fontWeight="bold">Thesaurus</PopoverHeader>
          <PopoverBody>
            A thesaurus (plural thesauri or thesauruses) or synonym dictionary
            is a reference work for finding synonyms and sometimes antonyms of words.
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default ThesaurusDefinitionPopover;
