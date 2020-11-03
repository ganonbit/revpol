import { Box, Text, Flex, Spacer, Button } from '@chakra-ui/core';

const Output = ({ outputTotal, clearState }) => {
  return (
    <Flex align='end' h='100%' p='5px 0'>
      <Box>
        <Text fontSize='1.5rem'>Total: {outputTotal}</Text>
      </Box>
      <Spacer />
      <Box>
        <Button
          variant='button'
          fontSize='2rem'
          onClick={() => {
            clearState();
          }}>
          clear
        </Button>
      </Box>
    </Flex>
  );
};

export { Output };
