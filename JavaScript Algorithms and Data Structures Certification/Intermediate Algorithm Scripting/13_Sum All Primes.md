# Intermediate Algorithm Scripting: Sum All Primes

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.


# 中文版本FCC
```
算法中级：对所有素数求和

在这道题目中，我们需要写一个函数，它接收一个数字参数num，返回值为不大于这个数字的所有质数之和。

质数是大于 1 且仅可以被 1 和自己整除的数。比如，2 就是一个质数，因为它只可以被 1 和 2（它本身）整除。

注意，传入函数的num不一定是质数。
```


# Question
```js
function sumPrimes(num) {
  return num;
}

sumPrimes(10);
```


# Answer
```js
function sumPrimes(num) {
  //素组集合
  let primes = [];
  //待筛选的数据集合
  let nums = [];
  //判断 num 是否大于等于2
  if (num >= 2) {
    primes.push(2);
  }
  else {
    return '没有素数';
  }
  //剔除能被2整除的数据
  for (let i = 2; i <= num; i++) {
    if (i % 2 !== 0) {
      nums.push(i);
    }
  }
  //递归函数
  function PrimeFn(data) {
    //数组最前面一个数就是素数，拿出来存起，作为下次筛选的分母
    let p = data.shift();
    primes.push(p);
    let t = [];
    for (let v of data) {
      //能被 p 整除的都筛除，不能筛除的都存到临时数组 t 中
      v % p !== 0 ? t.push(v) : "";
    }
    //判断待筛除数组 t 是否还有，如果还有就进行一次递归
    t.length > 0 ? PrimeFn(t) : "";
  }

  //调用递归函数求出素数集合
  PrimeFn(nums);

  //求素数集合的和
  let result = 0;
  for (let s of primes) {
    result += s;
  }

  return result;
}

sumPrimes(10);
```
