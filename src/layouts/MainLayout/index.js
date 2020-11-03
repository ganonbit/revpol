import { Flex } from '@chakra-ui/core';

const MainLayout = ({ children }) => {
  return (
    <>
      <Flex m='6'>{children}</Flex>
    </>
  );
};

export default MainLayout;
