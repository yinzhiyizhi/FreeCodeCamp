# Intermediate Algorithm Scripting: Arguments Optional

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.


# 中文版本FCC
```
算法中级：可选参数

在这道题目中，我们需要写一个求和的函数，但它接收的参数数量不定。如果传入了两个参数，那么直接返回两数之和即可。如果只传入一个参数，那我们应该返回另一个函数用来接收下一个参数，然后求出两数之和。

比如，addTogether(2, 3)应该返回5。而addTogether(2)应该返回一个函数。

然后我们调用这个返回的函数，并给它传入另一个用于求和的值：

var sumTwoAnd = addTogether(2);

sumTwoAnd(3)此时应返回5。

只要其中任何一个参数不是数字，那我们就应返回undefined。
```


# Question
```js
function addTogether() {
  return false;
}

addTogether(2,3);
```


# Answer
```js
function addTogether() {
  let args = [...arguments]

  if (args.length >= 2) {
    if (typeof(args[0]) === 'number' && typeof(args[1]) === 'number') {
      return args[0] + args[1];
    }
    else {
      return undefined;
    }
  }
  else if (args.length === 1) {
    if (typeof(args[0]) === 'number') {
      let temp = args[0];

      return function (val) {
        if (typeof(val) === 'number') {
          return temp + val;
        }
        else {
          return undefined;
        }
      }
    }
    else {
      return undefined;
    }    
  }
  else {
    return undefined;
  }
}

addTogether(2,3);
```
