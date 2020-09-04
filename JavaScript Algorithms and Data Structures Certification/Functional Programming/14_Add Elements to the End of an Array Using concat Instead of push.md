# Functional Programming: Add Elements to the End of an Array Using concat Instead of push

Functional programming is all about creating and using non-mutating functions.

The last challenge introduced the `concat` method as a way to combine arrays into a new one without mutating the original arrays. Compare `concat` to the `push` method. `Push` adds an item to the end of the same array it is called on, which mutates that array. Here's an example:

```js
var arr = [1, 2, 3];
arr.push([4, 5, 6]);
// arr is changed to [1, 2, 3, [4, 5, 6]]
// Not the functional programming way
```

`Concat` offers a way to add new items to the end of an array without any mutating side effects.

Change the `nonMutatingPush` function so it uses `concat` to add `newItem` to the end of `original` instead of `push`. The function should return an array.


# 中文版本FCC
```
函数式编程：使用 concat 而不是 push 将元素添加到数组的末尾

函数式编程就是创建和使用 non-mutating 函数。

最后一个挑战介绍了concat方法，这是一种在不改变原始数组的前提下，将数组组合成新数组的方法。将concat方法与push方法做比较，Push将元素添加到调用它的数组的末尾，这样会改变该数组。举个例子：

    var arr = [1, 2, 3];
    arr.push([4, 5, 6]);
    // arr 变成了 [1, 2, 3, [4, 5, 6]]
    // 不是函数式编程

Concat方法可以将新项目添加到数组末尾，而不产生任何变更副作用。

修改nonMutatingPush函数，用concat替代push将newItem添加到original末尾，该函数应返回一个数组。
```


# Answer

```js
function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.concat(newItem);
  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
```