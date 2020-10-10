# Intermediate Algorithm Scripting: Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.


# 中文版本FCC
```
算法中级：最小公倍数

在这道题目中，我们需要写一个函数，它接收一个包含两个数字的数组参数arr，它的返回值为这两个数字范围内所有数字（包含这两个数字）的最小公倍数。

注意，较小数不一定总是出现在数组的第一个元素。

比如，传入[1, 3]，那么函数的返回结果应为 1、2、3 的最小公倍数，即为 6。

如果你遇到了问题，请点击帮助。
```


# Question
```js
function smallestCommons(arr) {
  return arr;
}


smallestCommons([1,5]);
```


# Answer
```js
function smallestCommons(arr) {
  //创建一个数组，从大到小排序
  let newArr = [];
  arr.sort(function(a, b) {
    return b - a;
  });
  for (let i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  //创建循环，将数组中最大的两个值相乘，再乘以一个不断增大的数，进行判断，找出最小公倍数
  let loop = 1;
  let result = 0;
  let n;
  do {
    result = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (result % newArr[n] !== 0) {
        break;
      }
    }
    loop++;
  } while (n !== newArr.length)

  return result;
}


smallestCommons([1,5]);
```
