import { Box, Button, useColorMode } from '@chakra-ui/react';

const NavBar = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    return (
    <Box display='flex' justifyContent='flex-end' >
    <Button m='4' rounded='full' onClick={toggleColorMode}>
      {colorMode === "light" 
      ?
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="m224.023438 448.03125c85.714843.902344 164.011718-48.488281 200.117187-126.230469-22.722656 9.914063-47.332031 14.769531-72.117187 14.230469-97.15625-.109375-175.890626-78.84375-176-176 .972656-65.71875 37.234374-125.832031 94.910156-157.351562-15.554688-1.980469-31.230469-2.867188-46.910156-2.648438-123.714844 0-224.0000005 100.289062-224.0000005 224 0 123.714844 100.2851565 224 224.0000005 224zm0 0">
      </path>
      </svg> 
      :
      <svg  stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z">
      </path>
      </svg> 
      }
    </Button>
    </Box>
    )
}

export default NavBar;