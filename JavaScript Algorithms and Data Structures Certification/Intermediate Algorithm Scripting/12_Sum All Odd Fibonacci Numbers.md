# Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.


# 中文版本FCC
```
算法中级：求斐波那契数组中的奇数之和

在这道题目中，我们需要写一个函数，参数为一个正整数num。它的作用是计算斐波那契数列中，小于或等于num的奇数之和。

斐波那契数列中，第一和第二个数字都是 1，后面的每个数字由之前两数相加得出。斐波那契数列的前六个数字分别为：1、1、2、3、5、8。

比如，sumFibs(10)应该返回10。因为斐波那契数列中，比10小的数字只有 1、1、3、5。
```


# Question
```js
function sumFibs(num) {
  return num;
}

sumFibs(4);
```


# Answer
```
function sumFibs(num) {
  let pervNum = 0;
  let currNum = 1;
  let result = 0;
  for (let i = 0; currNum <= num; i++) {
    if (currNum % 2 !== 0) {
      result += currNum;
    }
    currNum += pervNum;
    pervNum = currNum - pervNum;
  }

  return result;
}

sumFibs(4);
```
