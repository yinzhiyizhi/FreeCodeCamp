# Intermediate Algorithm Scripting: Drop it

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.


# 中文版本FCC
```
算法中级：放弃

在这道题目中，我们需要写一个函数，它接收两个参数，分别为一个数组arr以及一个函数func。我们需要从数组的第一个元素开始，用func来检查数组的每项。函数最终的返回值也是一个数组，它由原数组中第一个使得func为true的元素及其之后的所有元素组成。

如果数组中的所有元素都不能让func为true，则返回空数组[]。
```


# Question
```js
function dropElements(arr, func) {
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
```


# Answer
```js
function dropElements(arr, func) {
  let result = [...arr];
  for (let i = 0; i < arr.length; i++) {
    if (func(result[0])) {
      continue;
    }
    else {
      result.shift();
    }
  }
  return result;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
```
