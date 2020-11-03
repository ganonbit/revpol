import { useState, useEffect } from 'react';
import { Flex, Text, Box } from '@chakra-ui/core';
import { rpnCalculate } from '../../utils';

import { Evaluator } from './Evaluator';
import { Output } from './Output';
import { InputHistory } from './InputHistory';

const Calculator = () => {
  const [inputArray, setInputArray] = useState([]);
  const [outputTotal, setOutputTotal] = useState();

  const clearState = () => {
    setInputArray([]);
    setOutputTotal();
  };

  useEffect(() => {
    rpnCalculate(inputArray, setOutputTotal);
  }, [inputArray]);

  return (
    <Flex w='700px' direction='column'>
      <Box flex='1' w='100%' h='100%' bg='#333' color='#CFCFCF' p='2px 4px'>
        <Evaluator setInputArray={setInputArray} />
        <InputHistory inputArray={inputArray} />
      </Box>
      <Box flex='1' w='100%' bg='#CFCFCF' color='#333'>
        <Output outputTotal={outputTotal} clearState={clearState} />
      </Box>
    </Flex>
  );
};

export { Calculator };
