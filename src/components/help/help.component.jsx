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
} from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';

const Help = () => {
  const fontColorMain = useColorModeValue('#edf2f7', 'gray.800');
  const focusBorderColorGeneral = useColorModeValue({ boxShadow: '0 0 0 3px #3B82F6' }, { boxShadow: '0 0 0 3px orange' });

  return (
    <Box position="fixed" bottom="0" right="0" m="4" mr={[null, '169px', null]}>
      <Box zIndex="9992" className="relative bottom-0 right-0">
        <Popover placement="auto">
          <PopoverTrigger>
            <IconButton variant="ghost" outline="none" outlineColor="initial" style={{ outlineStyle: 'none' }} _focus={focusBorderColorGeneral} size="sm" icon={<QuestionIcon w="7" h="7" />} />
          </PopoverTrigger>
          <PopoverContent width="max-content" outline="none" outlineColor="initial" style={{ outlineStyle: 'none' }} _focus={focusBorderColorGeneral} background={fontColorMain}>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader fontFamily="Playfair Display" fontSize={['xl']} fontWeight="bold">Keyboard Shortcuts</PopoverHeader>
            <PopoverBody className="whitespace-pre-wrap text-left">
              <strong>Home Page</strong>
              {' '}
              {'\n'}
              <span>
                Search Word:
                {' '}
                <span>Ctrl + Shift + A</span>
                {' '}
                {'\n'}
              </span>
              <hr />
              <strong>Thesaurus Page only</strong>
              {' '}
              {'\n'}
              <span>
                Go to Home Page:
                {' '}
                <span>Ctrl + Shift + Q</span>
              </span>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </Box>
  );
};

export default Help;
