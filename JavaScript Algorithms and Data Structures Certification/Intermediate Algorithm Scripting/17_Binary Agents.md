# Intermediate Algorithm Scripting: Binary Agents

Return an English translated sentence of the passed binary string.

The binary string will be space separated.


# 中文版本FCC
```
算法中级：二进制转化

在这道题目中，我们需要写一个把二进制输入转换成英文句子的函数。

传入函数的二进制字符串会用空格作为分隔符。
```


# Question
```js
function binaryAgent(str) {
  return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
```


# Answer
```js
function binaryAgent(str) {
  let biString = str.split(' ');
  let result = [];

  for (let i = 0; i < biString.length; i++) {
    result.push(String.fromCharCode(Number.parseInt(biString[i], 2)));
  }

  return result.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
```
