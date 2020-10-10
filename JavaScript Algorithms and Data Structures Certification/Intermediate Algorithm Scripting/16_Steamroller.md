# Intermediate Algorithm Scripting: Steamroller

Flatten a nested array. You must account for varying levels of nesting.


# 中文版本FCC
```
算法中级：扁平化

在这道题目中，我们需要写一个数组扁平化的函数。

注意，你写的函数应该能够处理数组多级嵌套的情况。比如，[1, [2], [3, [4]]]在扁平化处理后的结果应为[1, 2, 3, 4]。
```


# Question
```js
function steamrollArray(arr) {
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
```


# Answer
```js
function steamrollArray(arr) {
  let result = [];

  let flatten = function(arg) {
    if (!Array.isArray(arg)) {
      result.push(arg);
    }
    else {
      for (let temp in arg) {
        flatten(arg[temp]); 
      }      
    }
  };

  arr.forEach(flatten);
  return result;
}

steamrollArray([1, [2], [3, [[4]]]]);
```
