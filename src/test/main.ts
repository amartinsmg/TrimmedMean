import { trimmedMean } from "../trimmed_mean";

/**
  Throws an error if the condition is false
  @param condition - A boolean expression to be evaluated
  @throws - Error if the condition is false 
 */

function assert(condition: any) {
  if (!condition) throw new Error("Assertion failed");
}

/**
    Rounds a number to a specified number of decimal places
    @param num - The number to be rounded
    @param decimalPlaces - The number of decimal places to round to
    @return - The rounded number
  */

function roundTo(num: number, decimalPlaces: number): number {
  let base10 = 10 ** decimalPlaces,
    result = Math.round(num * base10) / base10;
  return result;
}

/**
  This function tests the trimmedMean function to assert that it produces the expected results.
  The tests pass if all five assertions succeed. If any of the assertions fail, an error will be thrown.
  Finally, a success message is logged to the console.
 */
void (function () {
  const Arr = [-10, 2, 2, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 7, 8, 8, 8, 10, 11];
  assert(roundTo(trimmedMean(Arr, 5), 6) == 4.888889);
  assert(roundTo(trimmedMean(Arr, 10), 6) == 4.75);
  assert(roundTo(trimmedMean(Arr, 15), 6) == 4.714286);
  assert(roundTo(trimmedMean(Arr, 20), 6) == 4.666667);
  assert(roundTo(trimmedMean(Arr, 25), 6) == 4.6);
  console.log("Passed all tests successfully!");
})();
