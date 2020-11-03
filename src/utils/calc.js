function rpnEvaluate(seq) {
  //src: https://gist.githubusercontent.com/kavitshah8/6ba268c9185c6d7ba3a41e1fbf34be9d/raw/e935af9f6c9db83684a39b11f34232fcd96c6275/reversePolishNotation.js
  //modified for use with float

  let operands = ['+', '-', '*', '/'],
    stack = [],
    i = 0;

  stack.push(seq[i]);
  i++;

  while (i <= seq.length) {
    let item = seq[i];
    if (isNaN(item)) {
      let operandIndex = operands.indexOf(item);
      if (operandIndex == 0) {
        // pop the stack by removing the last element
        // splice mutates the array
        // let a = parseFloat(stack.splice(-1)[0], 10),
        let a = parseFloat(stack.pop(), 10),
          b = parseFloat(stack.pop(), 10);
        stack.push(a + b);
      }
      if (operandIndex == 1) {
        let a = parseFloat(stack.pop(), 10),
          b = parseFloat(stack.pop(), 10);
        stack.push(b - a);
      }
      if (operandIndex == 2) {
        let a = parseFloat(stack.pop(), 10),
          b = parseFloat(stack.pop(), 10);
        stack.push(a * b);
      }
      if (operandIndex == 3) {
        let a = parseFloat(stack.pop(), 10),
          b = parseFloat(stack.pop(), 10);
        stack.push(b / a);
      }
    } else {
      stack.push(parseFloat(item, 10));
    }
    i++;
  }

  return stack[0];
}

export const rpnCalculate = (inputArray, setOutputTotal) => {
  if (inputArray.length > 0) {
    console.log('inputArray in calc', inputArray);
    let calculatedTotal = rpnEvaluate(inputArray);
    console.log('calculatedTotal: ', calculatedTotal);
    setOutputTotal(calculatedTotal);
  }
};
