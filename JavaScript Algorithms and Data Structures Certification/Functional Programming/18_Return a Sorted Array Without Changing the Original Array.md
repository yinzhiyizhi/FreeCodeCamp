# Functional Programming: Return a Sorted Array Without Changing the Original Array

A side effect of the sort method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then run the sort method.

Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.


# 中文版本FCC
```
函数式编程：在不更改原始数组的前提下返回排序后的数组
sort方法会产生改变原始数组中元素顺序的副作用。换句话说，它会改变数组的位置。避免这种情况的一种方法是先将空数组连接到正在排序的数组上（记住concat返回一个新数组），再用sort方法。


在nonMutatingSort函数中使用sort方法对数组中的元素按升序进行排列。函数不能改变globalArray变量，应返回一个新数组。
```


# Question
```js
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line


  // Only change code above this line
}
nonMutatingSort(globalArray);
```


# Answer
```js
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  let result = [].concat(arr);
  result.sort();
  return result;

  // Only change code above this line
}
nonMutatingSort(globalArray);
```