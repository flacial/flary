import { Box, Spinner, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const LoadingSpinner = () => {
  const color = useColorModeValue('blue.500', 'orange');
  return (
    <Box display="flex" justifyContent="center" marginTop="20">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color={color}
        size="xl"
      />
    </Box>
  );
};

export default LoadingSpinner;
