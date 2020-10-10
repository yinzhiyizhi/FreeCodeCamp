# Intermediate Algorithm Scripting: Sorted Union

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.


# 中文版本FCC
```
算法中级：集合排序

在这道题目中，我们需要写一个函数，它接收两个或多个数组为参数。我们需要对这些数组中所有元素进行去除重复元素的处理，并以数组的形式返回去重结果。

需要注意的是，结果数组中的元素顺序必须与其传入的顺序保持一致。

如有疑问，请先浏览下方的测试用例。
```


# Question
```js
function uniteUnique(arr) {
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```


# Answer
```js
function uniteUnique(arr) {
  let args = [...arguments];
  let result = [];
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      if (result.indexOf(args[i][j]) === -1) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```
