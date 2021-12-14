const canConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= target.length; i++) {
    if (table[i] === true) {
      // Iterate through every word of the wordBank
      for (let word of wordBank) {
        // If the word matches characters starting at position i
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] = true;
        }
      }
    }
  }
  return table[target.length];
};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
  ])
); // false
