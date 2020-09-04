# Functional Programming: Use the every Method to Check that Every Element in an Array Meets a Criteria

The every method works with arrays to check if every element passes a particular test. It returns a Boolean value - true if all values meet the criteria, false if not.

For example, the following code would check if every element in the numbers array is less than 10:

```
var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});
// Returns false
```

Use the every method inside the checkPositive function to check if every element in arr is positive. The function should return a Boolean value.


# 中文版本FCC
```
函数式编程：使用 every 方法检查数组中的每个元素是否符合条件

every方法用于检测数组中所有元素是否都符合指定条件。如果所有元素满足条件，返回布尔值true，反之返回false。

举个例子，下面的代码检测数组numbers的所有元素是否都小于 10：

var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});
// 返回 false

在checkPositive函数中使用every方法检查arr中是否所有元素都是正数，函数应返回一个布尔值。
```


# Question
```js
// Only change code below this line
function urlSlug(title) {


}
// Only change code above this line
```


# Answer
```js
function checkPositive(arr) {
  // Only change code below this line
  return arr.every(num => num > 0);

  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```