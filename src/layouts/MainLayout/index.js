import { Link } from 'react-router-dom';
import { Heading, Box, Flex, Spacer, Button } from '@chakra-ui/core';

import { path } from '../../appConstants';

const MainLayout = ({ children }) => {
  return (
    <>
      <Flex m='6'>{children}</Flex>
    </>
  );
};

export default MainLayout;
