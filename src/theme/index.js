import { extendTheme } from '@chakra-ui/core';

//TODO: make themes based on system color mode
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

const customTheme = extendTheme({ config });

export default customTheme;
