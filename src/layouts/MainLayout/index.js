import PropTypes from 'prop-types';
import { Flex } from '@chakra-ui/core';

const MainLayout = ({ children }) => {
  return (
    <>
      <Flex m='6'>{children}</Flex>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;
