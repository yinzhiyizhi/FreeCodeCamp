# Functional Programming: Implement the filter Method on a Prototype

It would teach us a lot about the `filter` method if we try to implement a version of it that behaves exactly like `Array.prototype.filter()`. It can use either a `for` loop or `Array.prototype.forEach()`.

Note: A pure function is allowed to alter local variables defined within its scope, although, it's preferable to avoid that as well.

Write your own `Array.prototype.myFilter()`, which should behave exactly like `Array.prototype.filter()`. You may use a `for` loop or the `Array.prototype.forEach()` method.


# 中文版本FCC
```
函数式编程：在原型上实现 filter 方法

为了加深对filter的理解，现在我们来自己实现一下Array.prototype.filter()方法。

可以用for循环或Array.prototype.forEach()。

请注意：纯函数可以改变其作用域内定义的局部变量，但我们最好不要这样做。

编写一个和Array.prototype.filter()功能一样的Array.prototype.myFilter()方法。你可以用for循环或Array.prototype.forEach()方法。
```


# Answer

```js
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  // Only change code below this line
  var newArray = [];
  for (let elem of this) {
    if (callback(elem)) {
      newArray.push(elem);
    }
  }
  // Only change code above this line
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
```