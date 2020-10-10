const mathExpressionRegex = /^\d+(\s*[*+-/]\s*\d+)([*+-/]\s*\d+)*/i;

export const isMathExpression = (val: string) => {
  return mathExpressionRegex.test(val);
};
