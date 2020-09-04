# Functional Programming: Sort an Array Alphabetically using the sort Method

The `sort` method sorts the elements of an array according to the callback function.

For example:

```js
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);
// Returns [1, 2, 3, 4, 5]

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);
// Returns ['z', 's', 'l', 'h', 'b']
```

JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. Therefore, it is encouraged to provide a callback function to specify how to sort the array items. When such a callback function, normally called `compareFunction`, is supplied, the array elements are sorted according to the return value of the `compareFunction`: If `compareFunction(a,b)` returns a value less than 0 for two elements `a` and `b`, then a will come before `b`. If `compareFunction(a,b)` returns a value greater than 0 for two elements `a` and `b`, then `b` will come before `a`. If `compareFunction(a,b)` returns a value equal to 0 for two elements `a` and `b`, then `a` and `b` will remain unchanged.

Use the `sort` method in the `alphabeticalOrder` function to sort the elements of `arr` in alphabetical order.


# 中文版本FCC
```
函数式编程：使用 sort 方法按字母顺序给数组排序

sort方法可以根据回调函数对数组元素进行排序。

举个例子：

    function ascendingOrder(arr) {
      return arr.sort(function(a, b) {
        return a - b;
      });
    }
    ascendingOrder([1, 5, 2, 3, 4]);
    // Returns [1, 2, 3, 4, 5]

    function reverseAlpha(arr) {
      return arr.sort(function(a, b) {
        return a < b;
      });
    }
    reverseAlpha(['l', 'h', 'z', 'b', 's']);
    // 返回 ['z', 's', 'l', 'h', 'b']

注意：提倡使用回调函数来指定如何对数组项进行排序。JavaScript 的默认排序算法是按照 Unicode 字符编码排序的，所以可能会返回意料之外的结果。

在alphabeticalOrder函数中使用sort方法对arr中的元素按照字母顺序排列。
```


# Question
```js
function alphabeticalOrder(arr) {
  // Only change code below this line


  // Only change code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
```


# Answer
```js
function alphabeticalOrder(arr) {
  // Only change code below this line
  return arr.sort();

  // Only change code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
```