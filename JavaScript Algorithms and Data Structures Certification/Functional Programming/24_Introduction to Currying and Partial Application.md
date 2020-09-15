# Functional Programming: Introduction to Currying and Partial Application

The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.

In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

Here's an example:

```
//Un-curried function
function unCurried(x, y) {
  return x + y;
}

//Curried function
function curried(x) {
  return function(y) {
    return x + y;
  }
}
//Alternative using ES6
const curried = x => y => x + y

curried(1)(2) // Returns 3
```

This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. Here's an example using the curried function in the example above:

```
// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3
```

Similarly, partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments. Here's an example:

```
//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13
```

Fill in the body of the add function so it uses currying to add parameters x, y, and z.


# 中文版本FCC
```
函数式编程：函数柯里化

arity是函数所需的形参的数量。函数Currying意思是把接受多个arity的函数变换成接受单一arity的函数。

换句话说，就是重构函数让它接收一个参数，然后返回接收下一个参数的函数，依此类推。

举个例子：

//Un-curried function
function unCurried(x, y) {
  return x + y;
}

// 柯里化函数
function curried(x) {
  return function(y) {
    return x + y;
  }
}
curried(1)(2) // 返回 3

柯里化在不能一次为函数提供所有参数情况下很有用。因为它可以将每个函数的调用保存到一个变量中，该变量将保存返回的函数引用，该引用在下一个参数可用时接受该参数。下面是使用curried函数的例子：

// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // 打印 3

类似地，partial application的意思是一次对一个函数应用几个参数，然后返回另一个应用更多参数的函数。

举个例子：

//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 返回 13

填写add函数主体部分，用柯里化添加参数x，y和z.
```


# Question
```js
function add(x) {
  // Only change code below this line


  // Only change code above this line
}
add(10)(20)(30);
```


# Answer
```js
function add(x) {
  // Only change code below this line
  return y => z => x + y + z;
  // Only change code above this line
}
add(10)(20)(30);
```