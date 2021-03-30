/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Button, useColorModeValue,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { connect } from 'react-redux';
import { onOpenSearchBar } from '../../redux/words/words.action';

const SearchButtonHeader = ({ onOpenSearchBar }) => {
  const focusBorderColorInput = useColorModeValue({ boxShadow: '0 0 0 3px #3B82F6' }, { boxShadow: '0 0 0 3px orange' });

  return (
    <Button _focus={focusBorderColorInput} focusBorderColor={focusBorderColorInput} boxShadow="lg" outline="none" outlineColor="initial" style={{ outlineStyle: 'none' }} m="4" mr="-1" rounded="xl" onClick={onOpenSearchBar}>
      <SearchIcon />
    </Button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onOpenSearchBar: () => dispatch(onOpenSearchBar()),
});

export default connect(null, mapDispatchToProps)(SearchButtonHeader);
