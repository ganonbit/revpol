import { Link } from 'react-router-dom';
import { Heading, Box, Flex, Spacer, Button } from '@chakra-ui/core';

import { path } from '../../appConstants';

const MainLayout = ({ children }) => {
  return (
    <>
      <Flex m='5'>
        <Box p={2}>
          <Heading fontSize='2.25rem'>RevPol</Heading>
        </Box>
        <Spacer />
        <Box>
          <Link to={path.home}>
            <Button>Home</Button>
          </Link>

          <Link to={path.calculator}>
            <Button>Calculator</Button>
          </Link>
        </Box>
      </Flex>
      <Heading>{children}</Heading>
    </>
  );
};

export default MainLayout;
