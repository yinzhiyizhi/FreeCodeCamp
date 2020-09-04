# Functional Programming: Combine Two Arrays Using the concat Method

Concatenation means to join items end to end. JavaScript offers the concat method for both strings and arrays that work in the same way. For arrays, the method is called on one, then another array is provided as the argument to concat, which is added to the end of the first array. It returns a new array and does not mutate either of the original arrays. Here's an example:

```js
[1, 2, 3].concat([4, 5, 6]);
// Returns a new array [1, 2, 3, 4, 5, 6]
```

Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original. The function should return the concatenated array.


# 中文版本FCC
```
函数式编程：使用 concat 方法组合两个数组

Concatenation意思是将元素连接到尾部。同理，JavaScript 为字符串和数组提供了concat方法。对数组来说，在一个数组上调用concat方法，然后提供另一个数组作为参数添加到第一个数组末尾，返回一个新数组，不会改变任何一个原始数组。举个例子：

    [1, 2, 3].concat([4, 5, 6]);
    // 返回新数组 [1, 2, 3, 4, 5, 6]

在nonMutatingConcat函数里使用concat，将attach拼接到original尾部，返回拼接后的数组。
```


# Answer

```js
function nonMutatingConcat(original, attach) {
  // Only change code below this line
  return .concat(attach);
  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
```