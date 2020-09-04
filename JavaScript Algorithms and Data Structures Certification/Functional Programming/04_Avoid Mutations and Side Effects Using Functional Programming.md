# Functional Programming: Avoid Mutations and Side Effects Using Functional Programming

If you haven't already figured it out, the issue in the previous challenge was with the `splice` call in the `tabClose()` function. Unfortunately, `splice` changes the original array it is called on, so the second call to it used a modified array, and gave unexpected results.
`
This is a small example of a much larger pattern - you call a function on a variable, array, or an object, and the function changes the variable or something in the object.

One of the core principles of functional programming is to not change things. Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.

The previous example didn't have any complicated operations but the `splice` method changed the original array, and resulted in a bug.

Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a side effect. A function, ideally, should be a pure function, meaning that it does not cause any side effects.

Let's try to master this discipline and not alter any variable or object in our code.

Fill in the code for the function `incrementer` so it returns the value of the global variable `fixedValue` increased by one.


# 中文版本FCC
```
函数式编程：使用函数式编程避免突变和副作用

如果你还没想通，上一个挑战的问题出在tabClose()函数里的splice。不幸的是，splice修改了调用它的原始数组，所以第二次调用它时是基于修改后的数组，才给出了意料之外的结果。

这是一个小例子，还有更广义的定义——你在变量，数组或对象上调用一个函数，这个函数会改变对象中的变量或其他东西。

函数式编程的核心原则之一是不改变任何东西。变化会导致错误。如果一个函数不改变传入的参数、全局变量等数据，那么它造成问题的可能性就会小很多。

前面的例子没有任何复杂的操作，但是splice方法改变了原始数组，导致 bug 产生。

回想一下，在函数式编程中，改变或变更叫做mutation，这种改变的结果叫做“副作用”（side effect）。理想情况下，函数应该是不会产生任何副作用的pure function。

让我们尝试掌握这个原则：不要改变代码中的任何变量或对象。

填写incrementer函数的代码，使其返回全局变量fixedValue的值增加 1。
```


# Answer

```js
// The global variable
var fixedValue = 4;

function incrementer () {
  // Only change code below this line
  let num = fixedValue;
  num += 1;
  return num;

  // Only change code above this line
}
```