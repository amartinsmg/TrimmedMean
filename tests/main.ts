import { trimmedMean } from "../src/ts/trimmed_mean";

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
 * Assert that two numbers are equal within a precision of 6 decimal places.
 * * @param actual - The numerical value produced by the system.
 * @param expected - The reference value to compare against.
 * * @remarks
 * The function uses `roundTo(n, 6)` to mitigate floating-point precision issues
 * before performing the equality check.
 * * @throws {Error} If the rounded `actual` value does not strictly equal `expected`.
 */

function check(actual: number, expected: number) {
  const condition = roundTo(actual, 6) == expected;
  if (!condition)
    throw new Error(`Test failed: Expected: ${expected}, received: ${actual}`);
}

/**
  This function tests the trimmedMean function to assert that it produces the expected results.
  The tests pass if all five assertions succeed. If any of the assertions fail, an error will be thrown.
  Finally, a success message is logged to the console.
 */

void (function () {
  const Arr = [-10, 2, 2, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 7, 8, 8, 8, 10, 1000];
  try {
    check(trimmedMean(Arr, 5), 4.888889);
    check(trimmedMean(Arr, 10), 4.75);
    check(trimmedMean(Arr, 15), 4.714286);
    check(trimmedMean(Arr, 20), 4.666667);
    check(trimmedMean(Arr, 25), 4.6);
    console.log("Passed all tests successfully!");
  } catch (e) {
    if (e instanceof Error) console.log(e.message);
    else console.log(e);
  }
})();
