# Basic Algorithm Scripting: Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


# Answer

```JavaScript
function chunkArrayInGroups(arr, size) {
  let result = [];
  let arraySize = arr.length / size;
  for (let i = 0; i < arraySize; i++) {
    let subArray = arr.splice(0, size);
    result.push(subArray);
  }
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
```