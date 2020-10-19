const mathExpressionRegex = /^\d+(\s*[*+-/]\s*\d+)([*+-/]\s*\d+)*/i;

export const isMathExpression = (val: string) => {
  return mathExpressionRegex.test(val);
};

export const calc = ({ exp }: { exp: string }) => {
  const mathArr = exp.split(/([-+*\/])/);

  return mathArr.reduce((acc, it, idx, arr) => {
    if (isNaN(Number(it))) {
      const x = Number(arr[idx + 1]);
      switch (it) {
        case "+":
          return acc + x;
        case "-":
          return acc - x;
        case "*":
          return acc * x;
        case "/":
          return acc / x;
      }
    }
    return acc;
  }, Number(mathArr[0]));
};
