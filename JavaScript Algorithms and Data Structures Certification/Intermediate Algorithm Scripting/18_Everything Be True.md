# Intermediate Algorithm Scripting: Everything Be True

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.


# 中文版本FCC
```
算法中级：真假值判断

在这道题目中，我们需要写一个函数，它接收两个参数。第一个参数为对象数组collection，第二个参数为一个字符串pre，代表对象的一个键（key）。我们需要检查对象数组中每个对象的pre属性对应的值是否都为 “真”（truthy）。如果是，则返回true，否则返回false。

JavaScript 中，如果一个值在 Boolean 的上下文中（比如if语句）可以被执行为true，那么这个值就被认为是truthy的。

注意，你可以选择使用.或[]来访问对象属性对应的值。
```


# Question
```js
function truthCheck(collection, pre) {
  return pre;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
```


# Answer
```js
function truthCheck(collection, pre) {
  let count = 0;

  for (let temp in collection) {
    if (collection[temp].hasOwnProperty(pre) && Boolean(collection[temp][pre])) {
      count++;
    }
  }

  return count == collection.length;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
```
