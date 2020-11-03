import { Text } from '@chakra-ui/core';
import { PropTypes } from 'prop-types';

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

InputHistory.propTypes = {
  inputArray: PropTypes.array,
};

export { InputHistory };
