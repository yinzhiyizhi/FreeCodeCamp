# Intermediate Algorithm Scripting: Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.


# 中文版本FCC
```
算法中级：范围内的数字求和

给出一个含有两个数字的数组，我们需要写一个函数，让它返回这两个数字间所有数字（包含这两个数字）的总和。

注意，较小数不一定总是出现在数组的第一个元素。

如果你遇到了问题，请点击帮助。
```


# Question
```js
function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);
```


# Answer
```js
function sumAll(arr) {
  if (arr[0] > arr[1]) {
    let temp = 0;
    temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
  }
  let result = 0;
  for (let num = arr[0]; num <= arr[1]; num++) {
    result += num;
  }
  return result;
}

sumAll([1, 4]);
```