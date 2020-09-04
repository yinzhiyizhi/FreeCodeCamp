# Functional Programming: Combine an Array into a String Using the join Method

The join method is used to join the elements of an array together to create a string. It takes an argument for the delimiter that is used to separate the array elements in the string.

Here's an example:

```
var arr = ["Hello", "World"];
var str = arr.join(" ");
// Sets str to "Hello World"
```

Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string. For example, "I-like-Star-Wars" would be converted to "I like Star Wars". For this challenge, do not use the replace method.


# 中文版本FCC
```
函数式编程：使用 join 方法将数组组合成字符串

join方法用来把数组中的所有元素放入一个字符串，并通过指定的分隔符参数进行分隔。

举个例子：

var arr = ["Hello", "World"];
var str = arr.join(" ");
// Sets str to "Hello World"

在函数sentensify内用join方法（及其他方法）用字符串str中的单词造句，这个函数应返回一个字符串。举个例子，"I-like-Star-Wars" 会被转换成 "I like Star Wars"。在此挑战中请勿使用replace方法。
```


# Question
```js
function sentensify(str) {
  // Only change code below this line


  // Only change code above this line
}
sentensify("May-the-force-be-with-you");
```


# Answer
```js
function sentensify(str) {
  // Only change code below this line
  let arr = str.split(/[^a-zA-Z]/);
  let result = arr.join(" ");
  return result;
  // Only change code above this line
}
sentensify("May-the-force-be-with-you");
```