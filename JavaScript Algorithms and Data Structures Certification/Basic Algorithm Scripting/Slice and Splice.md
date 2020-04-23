# Basic Algorithm Scripting: Slice and Splice

You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.


# Answer

```JavaScript
function frankenSplice(arr1, arr2, n) {
  let arr3 = arr2.slice();
  arr3.splice(n, 0, ...arr1);
  return arr3;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
```