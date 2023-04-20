/**
  Calculates the mean value of an array of numbers
    @param values - An array of numbers
    @returns - The mean value of the array
    @throws - If the input array is empty
*/

function mean(values: number[]): number {
  if (values.length == 0)
    throw new Error("Insert an array with at least one number.");
  const SUM = values.reduce((acc, val) => acc + val, 0),
    RESULT = SUM / values.length;
  return RESULT;
}

/**
  Calculates the trimmed mean of an array of numbers. The trimmed mean is calculated by sorting
    the array, removing the specified percentage of elements from the beginning and end of the
    array, and then calculating the mean of the remaining elements.
    @param values - An array of numbers
    @param trimmedMeanPercentage - The percentage of elements to be trimmed from the beginning
      and end of the sorted array
    @returns - The trimmed mean of the array
    @throws - An error if the number of elements to be trimmed is greater than or equal to the
      length of the array.
*/

export function trimmedMean(
  values: number[],
  trimmedMeanPercentage: number
): number {
  const N_ELEMENTS_TO_TRIM = Math.round(
      (values.length * trimmedMeanPercentage) / 100
    ),
    SortedValues = values.sort((a, b) => a - b);
  if (N_ELEMENTS_TO_TRIM >= SortedValues.length) {
    throw new Error(
      `The number of elements to be trimmed (${N_ELEMENTS_TO_TRIM}) is greater than or equal to the length of the array (${SortedValues.length}).`
    );
  }
  const TrimmedValues = SortedValues.slice(
    N_ELEMENTS_TO_TRIM,
    SortedValues.length - N_ELEMENTS_TO_TRIM
  );
  return mean(TrimmedValues);
}
