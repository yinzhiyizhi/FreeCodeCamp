# Functional Programming: Use the some Method to Check that Any Elements in an Array Meet a Criteria

The some method works with arrays to check if any element passes a particular test. It returns a Boolean value - true if any of the values meet the criteria, false if not.

For example, the following code would check if any element in the numbers array is less than 10:

```
var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
  return currentValue < 10;
});
// Returns true
```

Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.


# 中文版本FCC
```
函数式编程：使用 some 方法检查数组中是否有元素是否符合条件

some方法用于检测数组中任何元素是否满足指定条件。如果有一个元素满足条件，返回布尔值true，反之返回false。

举个例子，下面的代码检测数组numbers中是否有元素小于10：

var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
  return currentValue < 10;
});
// 返回 true

在checkPositive函数值中使用some检查arr中是否有元素为正数，函数应返回一个布尔值。
```


# Question
```js
function checkPositive(arr) {
  // Only change code below this line


  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```


# Answer
```js
function checkPositive(arr) {
  // Only change code below this line
  return arr.some(num => num > 0);

  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```