import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Input, Text, Flex } from '@chakra-ui/core';

const RpnEvaluator = ({ setInputArray, setError, error }) => {
  useEffect(() => {
    //TODO: cleanup effect by abstracting out listener(). use yup/formik for validation/errors.
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
      <Flex h='100%' align='center' direction={{ base: 'column', lg: 'row' }}>
        <Input type='text' name='eval' placeholder='e.g. 5 5 8 + -' variant='unstyled' fontSize='1.5rem' />
        {error && (
          <Text color='red.400' fontSize='1rem' fontFamily='mono'>
            {error}
          </Text>
        )}
      </Flex>
    </>
  );
};

RpnEvaluator.propTypes = {
  error: PropTypes.string,
  setError: PropTypes.func,
  setInputArray: PropTypes.func,
};

export { RpnEvaluator };
