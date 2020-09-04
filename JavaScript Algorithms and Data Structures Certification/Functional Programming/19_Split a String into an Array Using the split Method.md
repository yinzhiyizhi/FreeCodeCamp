# Functional Programming: Split a String into an Array Using the split Method

The split method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression. For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.

Here are two examples that split one string by spaces, then another by digits using a regular expression:

```
var str = "Hello World";
var bySpace = str.split(" ");
// Sets bySpace to ["Hello", "World"]

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
// Sets byDigits to ["How", "are", "you", "today"]
```

Since strings are immutable, the split method makes it easier to work with them.

Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.


# 中文版本FCC
```
函数式编程：使用 split 方法将字符串拆分成数组

split方法用于把字符串分割成字符串数组，接收一个分隔符参数，分隔符可以是用于分解字符串或正则表达式的字符。举个例子，如果分隔符是空格，你会得到一个单词数组；如果分隔符是空字符串，你会得到一个由字符串中每个字符组成的数组。

下面是两个用空格分隔一个字符串的例子，另一个是用数字的正则表达式分隔：

var str = "Hello World";
var bySpace = str.split(" ");
// Sets bySpace to ["Hello", "World"]

var otherString = "How9are7you2today";
var byDigits = str.split(/\d/);
// Sets byDigits to ["How", "are", "you", "today"]

因为字符串是固定的，split方法可以更简单的操作它们。


在splitify函数中用split方法将str分割成单词数组，这个方法应该返回一个数组。单词不一定都是用空格分隔，所以数组中不应包含标点符号。
```


# Question
```js
function splitify(str) {
  // Only change code below this line


  // Only change code above this line
}
splitify("Hello World,I-am code");

```


# Answer
```js
function splitify(str) {
  // Only change code below this line
  let result = str.split(/[^a-zA-Z]/);
  return result;

  // Only change code above this line
}
splitify("Hello World,I-am code");
```