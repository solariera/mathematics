/**
 * median
 * @param values
 * @returns
 */
const median = (...values: number[]): number => {
  const halfColumn = (values.length / 2) | 0;
  const sortedValues = values.sort((a, b) => a - b);
  if (sortedValues.length % 2) return sortedValues[halfColumn];
  return (sortedValues[halfColumn - 1] + sortedValues[halfColumn]) / 2;
};

export { median };
