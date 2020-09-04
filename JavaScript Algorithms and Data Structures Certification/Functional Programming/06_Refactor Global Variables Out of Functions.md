# Functional Programming: Refactor Global Variables Out of Functions

So far, we have seen two distinct principles for functional programming:

1) Don't alter a variable or object - create new variables and objects and return them if need be from a function.

2) Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable.

Adding one to a number is not very exciting, but we can apply these principles when working with arrays or more complex objects.

Rewrite the code so the global array `bookList` is not changed inside either function. The `add` function should add the given `bookName` to the end of the array passed to it and return a new array (list). The `remove` function should remove the given `bookName` from the array passed to it.

Note: Both functions should return an array, and any new parameters should be added before the `bookName` parameter.


# 中文版本FCC
```
函数式编程：在函数中重构全局变量

目前为止，我们已经看到了函数式编程的两个原则：

1) 不要更改变量或对象——创建新变量和对象，并在需要时从函数返回它们。

2) 声明函数参数——函数内的任何计算仅取决于参数，而不取决于任何全局对象或变量。

给数字增加 1 不够刺激，我们可以在处理数组或更复杂的对象时应用这些原则。

重构代码，使全局数组bookList在函数内部不会被改变。add函数可以将指定的bookName增加到数组末尾。remove函数可以从数组中移除指定bookName。两个函数都返回数组，并且任何参数都应该添加到bookName前面。
```


# Answer

```js
// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookList, bookName) {
  return [...bookList, bookName];
}

// Change code below this line
function remove (bookList, bookName) {
  let bookListCopy = [...bookList];
  let book_index = bookListCopy.indexOf(bookName);
  if (book_index >= 0) {

    bookListCopy.splice(book_index, 1);
    return bookListCopy;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
```