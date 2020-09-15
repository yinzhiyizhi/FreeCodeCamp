# Intermediate Algorithm Scripting: Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.


# 中文版本FCC
```
算法中级：区分两个数组

在这道题目中，我们需要写一个函数，比较两个数组，返回一个新的数组。这个新数组需要包含传入的两个数组所有元素中，仅在其中一个数组里出现的元素。如果某个元素同时出现在两个数组中，则不应包含在返回的数组里。换言之，我们需要返回这两个数组的对称差。

如果你遇到了问题，请点击帮助。

注意：
返回数组中的元素顺序不会影响测试结果。
```


# Question
```js
function diffArray(arr1, arr2) {
  var newArr = [];
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```


# Answer
```js
function diffArray(arr1, arr2) {
  let newArr = [];
  function onlyInFirst(first, second) {
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```