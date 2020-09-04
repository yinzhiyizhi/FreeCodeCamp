# Functional Programming: Pass Arguments to Avoid External Dependence in a Function

The last challenge was a step closer to functional programming principles, but there is still something missing.

We didn't alter the global variable value, but the function `incrementer` would not work without the global variable `fixedValue` being there.

Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.

There are several good consequences from this principle. The function is easier to test, you know exactly what input it takes, and it won't depend on anything else in your program.

This can give you more confidence when you alter, remove, or add new code. You would know what you can or cannot change and you can see where the potential traps are.

Finally, the function would always produce the same output for the same set of inputs, no matter what part of the code executes it.

Let's update the `incrementer` function to clearly declare its dependencies.

Write the `incrementer` function so it takes an argument, and then returns a result after increasing the value by one.


# 中文版本FCC
```
函数式编程：传递参数以避免函数中的外部依赖

最后一个挑战是更接近函数式编程原则的挑战，但是仍然缺少一些东西。

虽然我们没有改变全局变量值，但在没有全局变量fixedValue情况下，incrementer函数将不起作用。

函数式编程的另一个原则是：总是显式声明依赖关系。如果函数依赖于一个变量或对象，那么将该变量或对象作为参数直接传递到函数中。

这样做会有很多好处，其中一点是让函数更容易测试，因为你确切地知道参数是什么，并且这个参数也不依赖于程序中的任何其他内容。

其次，这样做可以让你更加自信地更改，删除或添加新代码。因为你很清楚哪些是可以改的，哪些是不可以改的，这样你就知道哪里可能会有潜在的陷阱。

最后，无论代码的哪一部分执行它，函数总是会为同一组输入生成相同的输出。

更新incrementer函数，明确声明其依赖项。

编写incrementer函数，获取它的参数，然后将值增加 1。
```


# Answer

```js
// The global variable
var fixedValue = 4;

// Only change code below this line
function incrementer (fixedValue) {
  let num = fixedValue;
  num += 1;
  return num;

  // Only change code above this line
}
```