# Intermediate Algorithm Scripting: Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


# 中文版本FCC
```
算法中级：短线连接格式

在这道题目中，我们需要写一个函数，把一个字符串转换为“短线连接格式”。短线连接格式的意思是，所有字母都是小写，且用-连接。比如，对于Hello World，应该转换为hello-world；对于I love_Javascript-VeryMuch，应该转换为i-love-javascript-very-much。

如果你遇到了问题，请点击帮助。
```


# Question
```js
function spinalCase(str) {
  return str;
}

spinalCase('This Is Spinal Tap');
```


# Answer
```js
function spinalCase(str) {
  let regex = /\s+|_+/g;

  str = str.trim().replace(/([a-z])([A-Z])/g, "$1 $2");

  return str.replace(regex, "-").toLowerCase();
}

spinalCase('This Is Spinal Tap');
```
