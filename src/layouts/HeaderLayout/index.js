import { Link } from 'react-router-dom';
import { Heading, Box, Flex, Spacer, Button } from '@chakra-ui/core';

import { path } from '../../appConstants';

const HeaderLayout = ({ children }) => {
  return (
    <>
      <Flex m='2'>
        <Box>
          <Heading fontSize='2.25rem'>RevPol</Heading>
          <Heading as='h4' fontSize='1rem'>
            reverse polish notation made simple.
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <Link to={path.home}>
            <Button>Home</Button>
          </Link>
        </Box>
      </Flex>
      <Heading m='4'>{children}</Heading>
    </>
  );
};

export default HeaderLayout;
