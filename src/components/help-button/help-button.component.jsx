/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  useColorModeValue,
  IconButton,
  Button,
  chakra,
} from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';

const Help = () => {
  const fontColorMain = useColorModeValue('#edf2f7', 'gray.800');
  const focusBorderColorGeneral = useColorModeValue({ boxShadow: '0 0 0 3px #3B82F6' }, { boxShadow: '0 0 0 3px orange' });
  const focusBorderColorInput = useColorModeValue({ boxShadow: '0 0 0 3px #3B82F6' }, { boxShadow: '0 0 0 3px orange' });
  const KeyboardShortCutsColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Popover placement="auto">
      <PopoverTrigger>
        <Button
          _focus={focusBorderColorInput}
          focusBorderColor={focusBorderColorInput}
          boxShadow="lg"
          outline="none"
          outlineColor="initial"
          style={{ outlineStyle: 'none' }}
          m="4"
          mr={[null, '40', null]}
          rounded="xl"
          title="Help button"
        >
          <QuestionIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent width="max-content" outline="none" outlineColor="initial" style={{ outlineStyle: 'none' }} _focus={focusBorderColorGeneral} background={fontColorMain}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontFamily="Playfair Display" fontSize={['xl']} fontWeight="bold">Keyboard Shortcuts</PopoverHeader>
        <PopoverBody className="whitespace-pre-wrap text-left">
          <strong>Global</strong>
          {' '}
          {'\n'}
          <chakra.span>
            Switch theme:
            {' '}
            <chakra.span color={KeyboardShortCutsColor}>Ctrl + Shift + X</chakra.span>
            {' '}
            {'\n'}
          </chakra.span>
          <hr />
          <strong>Home Page</strong>
          {' '}
          {'\n'}
          <chakra.span>
            Focus on input field:
            {' '}
            <chakra.span color={KeyboardShortCutsColor}>Ctrl + Shift + A</chakra.span>
            {' '}
            {'\n'}
          </chakra.span>
          <hr />
          <strong>Thesaurus Page</strong>
          {' '}
          {'\n'}
          <chakra.span>
            Go to Home Page:
            {' '}
            <chakra.span color={KeyboardShortCutsColor}>Ctrl + Shift + Q</chakra.span>
          </chakra.span>
          {'\n'}
          <chakra.span>
            Search bar:
            {' '}
            <chakra.span color={KeyboardShortCutsColor}>Ctrl + Shift + E</chakra.span>
          </chakra.span>
          {'\n'}
          {/* <chakra.span>
            Switch word type:
            {' '}
            <chakra.span color={KeyboardShortCutsColor}>Shift + 1 or 2 or 3</chakra.span>
          </chakra.span> */}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Help;
