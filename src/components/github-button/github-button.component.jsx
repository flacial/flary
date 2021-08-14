import { Button, useColorModeValue } from '@chakra-ui/react'; import React from 'react';
import { ReactComponent as Logo } from './github.svg';
import './github-button.styles.scss';

const GitHubButton = () => {
  const focusBorderColorInput = useColorModeValue({ boxShadow: '0 0 0 3px #3B82F6' }, { boxShadow: '0 0 0 3px orange' });
  const color = useColorModeValue('#252d3d', '#edf2f7');
  return (
    <Button className="rainbow" rel="noopener" title="Github Button" as="a" href="https://www.github.com/flacial/flary" _focus={focusBorderColorInput} focusBorderColor={focusBorderColorInput} boxShadow="lg" target="_blank" outline="none" outlineColor="initial" style={{ outlineStyle: 'none' }} m="4" mr="-1" rounded="xl">
      <Logo className="rainbow__logo" width="1.2em" height="1.2em" fill={color} />
    </Button>
  );
};

export default GitHubButton;
