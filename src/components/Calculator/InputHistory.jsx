import { Text } from '@chakra-ui/core';

const InputHistory = ({ inputArray }) => {
  const reverseArray = inputArray.slice(0).reverse();
  return (
    <>
      {reverseArray.map((x, index) => (
        <Text key={index}>{x}</Text>
      ))}
    </>
  );
};

export { InputHistory };
