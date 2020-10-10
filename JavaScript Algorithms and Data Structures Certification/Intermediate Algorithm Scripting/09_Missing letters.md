# Intermediate Algorithm Scripting: Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.


# 中文版本FCC
```
算法中级：丢失的字母

在这道题目中，我们需要写一个函数，找到传入的字符串里缺失的字母并返回它。

判断缺失的依据是字母顺序，比如 abcdfg 中缺失了 e。而 abcdef 中就没有字母缺失，此时我们需要返回undefined。
```


# Question
```js
function fearNotLetter(str) {
  return str;
}

fearNotLetter("abce");
```


# Answer
```js
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);

    if (code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

fearNotLetter("abce");
```
