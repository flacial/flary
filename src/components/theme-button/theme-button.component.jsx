import React, { useEffect, useRef } from 'react';
import {
  chakra, Button, useColorMode, useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons';

const ThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  // eslint-disable-next-line no-unused-vars
  const focusBorderColorInput = useColorModeValue({ boxShadow: '0 0 0 3px #3B82F6' }, { boxShadow: '0 0 0 3px orange' });
  const ThemeButtonRef = useRef(null);
  const textShadow = useColorModeValue('0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.1), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.10);', '0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5);');
  const hoverShadowNeonDark = useColorModeValue({ background: 'gray.200' }, { boxShadow: '0 0 5px #FFF, 0 0 10px #FFF, 0 0 7px #FFF, 0 0 3px #49ff18, 0 0 5px #c75600, 0 0 10px #c75600, 0 0 10px #c75600, 0 0 20px #c75600' });

  const HandleKeyDownThemeIcon = (event) => {
    if (event.key === 'X' && event.ctrlKey) {
      event.preventDefault();
      ThemeButtonRef.current.click();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', HandleKeyDownThemeIcon);
    return () => {
      document.removeEventListener('keydown', HandleKeyDownThemeIcon);
    };
  }, []);

  return (
    <Button ref={ThemeButtonRef} _focus={hoverShadowNeonDark} _hover={hoverShadowNeonDark} focusBorderColor="transparent" boxShadow={textShadow} outline="none" outlineColor="initial" style={{ outlineStyle: 'none' }} m="4" mr="-1" rounded="xl" onClick={toggleColorMode}>
      {colorMode === 'light'
        ? <MoonIcon />
        : (
          <chakra.svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z" />
          </chakra.svg>
        )}
    </Button>
  );
};

export default ThemeButton;
