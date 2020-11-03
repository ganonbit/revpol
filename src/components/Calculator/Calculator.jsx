import { useState, useEffect } from 'react';
import { Flex, Text, Box, Spacer } from '@chakra-ui/core';
import { rpnCalculate } from '../../utils';

import { Evaluator } from './Evaluator';
import { Output } from './Output';
import { InputHistory } from './InputHistory';

const Calculator = () => {
  const [inputArray, setInputArray] = useState([]);
  const [outputTotal, setOutputTotal] = useState();
  const [error, setError] = useState('');

  const clearState = () => {
    setInputArray([]);
    setOutputTotal();
    setError('');
  };

  useEffect(() => {
    rpnCalculate(inputArray, setOutputTotal);
  }, [inputArray]);

  return (
    <Flex w='100%' direction='column'>
      <Flex w='100%' direction='row' wrap={{ base: 'wrap', lg: 'nowrap' }}>
        <Box flex='0 1 auto' minW='400px'>
          <Text fontFamily='mono' letterSpacing='widest'>
            input your notation here
          </Text>
        </Box>
        <Box flex='0 1 auto' w='100%' bg='#333' color='#CFCFCF' p='2px 4px' minH={{ base: 'unset', lg: '100px' }}>
          <Evaluator setInputArray={setInputArray} error={error} setError={setError} />
        </Box>
      </Flex>
      {inputArray.length > 0 && (
        <Flex w='100%' direction='row' align='center' wrap={{ base: 'wrap', lg: 'nowrap' }}>
          <Box flex='0 1 auto' minW='400px'>
            <Text fontFamily='mono' letterSpacing='widest'>
              history
            </Text>
          </Box>
          <Box flex='0 1 auto' w='100%' bg='#333' color='#CFCFCF' p='2px 4px'>
            <InputHistory inputArray={inputArray} />
          </Box>
        </Flex>
      )}
      <Flex w='100%' direction='row' align='center' wrap={{ base: 'wrap', lg: 'nowrap' }}>
        <Box flex='0 1 auto' minW='400px'>
          <Text fontFamily='mono' letterSpacing='widest'>
            here you will find your output <br />
          </Text>
        </Box>
        <Box flex='0 1 auto' w='100%' bg='#CFCFCF' color='#333' p='2px 4px'>
          <Output outputTotal={outputTotal} clearState={clearState} />
        </Box>
      </Flex>
      <Flex w='100%' justify='end' direction='row' align='end' wrap={{ base: 'wrap', lg: 'nowrap' }}>
        <Box flex='0 1 auto' h='100%'>
          <Text fontFamily='mono' letterSpacing='wide' align='right' fontSize='0.8rem'>
            press &apos;clear&apos; to clear history
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export { Calculator };
