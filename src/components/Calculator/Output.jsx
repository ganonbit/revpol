import { Box, Text, Flex, Spacer, Button } from '@chakra-ui/core';

const Output = ({ outputTotal, clearState }) => {
  return (
    <Flex>
      <Box color='#333' h='100%'>
        <Text fontSize='1.5rem'>Total: {outputTotal}</Text>
      </Box>
      <Spacer />
      <Box>
        <Button
          variant='ghost'
          fontSize='1.5rem'
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
