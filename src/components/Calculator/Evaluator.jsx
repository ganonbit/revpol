import { useEffect, useState } from 'react';
import { Input, Text } from '@chakra-ui/core';

const Evaluator = ({ setInputArray }) => {
  const [error, setError] = useState('');

  useEffect(() => {
    const listener = (event) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter' || event.keyCode === 13) {
        event.preventDefault();
        if (!event.target.value) {
          setError('input required');
        } else if (!/[-+]?[0-9]*\.?[0-9]+([-+/*]?[0-9]+)?|[^\s\w]/g.test(event.target.value)) {
          setError('Only numbers and operators are allowed');
        } else if (/[-+]?[0-9]*\.?[0-9]+([-+/*]?[0-9]+)?|[^\s\w]/g.test(event.target.value)) {
          let currentInputDivide = event.target.value.toString().match(/[-+]?[0-9]*\.?[0-9]+([-+/*]?[0-9]+)?|[^\s\w]/g);
          setInputArray((currentState) => [...currentState.concat(currentInputDivide)]);
          event.target.value = '';
          setError('');
        }
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, []);

  return (
    <>
      <Input type='text' name='eval' placeholder='e.g. 5 5 8 + -' focusBorderColor='none' variant='unstyled' />
      {error && <Text color='red.400'>{error}</Text>}
    </>
  );
};

export { Evaluator };
