// Return an array of values that can sum to targetSum from
// numbers (with repeats)

const howSum = (targetSum, numbers, memo = {}) => {
  // If the targetSum has been stored, return
  if (targetSum in memo) return memo[targetSum];
  // A target sum of 0 can be made with the empty array
  if (targetSum === 0) return [];
  // Cannot be negative
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers, memo);
    // remainderResult either returns an array (meaning it can be found)
    // or null if it cannot
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return null;
};
