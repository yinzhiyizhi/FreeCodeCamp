# Intermediate Algorithm Scripting: Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.


# 中文版本FCC
```
算法中级：瞄准和消灭

在这道题目中，我们要写一个叫destroyer的函数。传给它的第一个参数是数组，我们称他为初始数组。后续的参数数量是不确定的，可能有一个或多个。你需要做的是，从初始数组中移除所有与后续参数相等的元素，并返回移除元素后的数组。

注意：
你可以使用arguments对象，也可以使用...，即“剩余参数”（Rest Parameters）语法。

如果你遇到了问题，请点击帮助。
```


# Question
```js
function destroyer(arr) {
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```


# Answer
```js
function destroyer(arr) {
  let temp = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !temp.includes(val);
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```

### Second Answer
```js
function destroyer(arr) {
  // 删掉那些值
  return arr.filter(x => ![...arguments].slice(1).includes(x));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```