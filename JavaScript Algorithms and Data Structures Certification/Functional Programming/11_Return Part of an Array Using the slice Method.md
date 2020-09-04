# Functional Programming: Return Part of an Array Using the slice Method

The slice method returns a copy of certain elements of an array. It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive). If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array. The slice method does not mutate the original array, but returns a new one.

Here's an example:

```js
var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1, 3);
// Sets newArray to ["Dog", "Tiger"]
```

Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices. The function should return an array.


# 中文版本FCC
```
函数式编程：使用 slice 方法返回数组的一部分

slice方法可以从已有数组中返回指定元素。它接受两个参数，第一个规定从何处开始选取，第二个规定从何处结束选取（不包括该元素）。如果没有传参，则默认为从数组的开头开始到结尾结束，这是复制整个数组的简单方式。slice返回一个新数组，不会修改原始数组。

举个例子：

    var arr = ["Cat", "Dog", "Tiger", "Zebra"];
    var newArray = arr.slice(1, 3);
    // 将新数组设置为 ["Dog", "Tiger"]

在sliceArray函数中使用slice方法，给出beginSlice和endSlice索引，返回anim数组的一部分，这个函数应返回一个数组。
```


# Answer

```js
function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
  return anim.slice(beginSlice, endSlice);
  // Only change code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
```