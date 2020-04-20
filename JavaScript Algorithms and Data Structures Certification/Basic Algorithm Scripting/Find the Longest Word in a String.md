# Basic Algorithm Scripting: Find the Longest Word in a String

Return the length of the longest word in the provided sentence.

Your response should be a number.


# Answer

```JavaScript
function findLongestWordLength(str) {
  let arr = str.split(' ');
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (result < arr[i].length) {
      result = arr[i].length;
    }
  }
  return result;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
```