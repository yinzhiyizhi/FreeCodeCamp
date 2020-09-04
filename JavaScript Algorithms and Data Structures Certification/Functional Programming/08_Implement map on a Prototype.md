# Functional Programming: Implement map on a Prototype

As you have seen from applying `Array.prototype.map()`, or simply `map()` earlier, the `map` method returns an array of the same length as the one it was called on. It also doesn't alter the original array, as long as its callback function doesn't.

In other words, `map` is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.

It would teach us a lot about `map` to try to implement a version of it that behaves exactly like the `Array.prototype.map()` with a `for` loop or `Array.prototype.forEach()`.

Note: A pure function is allowed to alter local variables defined within its scope, although, it's preferable to avoid that as well.

Write your own `Array.prototype.myMap()`, which should behave exactly like `Array.prototype.map()`. You may use a `for` loop or the `forEach` method.


# 中文版本FCC
```
函数式编程：在原型上实现 map 方法

我们之前用map方法（即Array.prototype.map()）返回一个与调用它的数组长度相同的数组。只要它的回调函数不改变原始数组，它就不会改变原始数组。

换句话说，map是一个纯函数，它的输出仅取决于输入的数组和作为参数传入的回调函数。

为了加深对map方法的理解，现在我们来用for或Array.prototype.forEach()自己实现一下这个方法。

注意：纯函数可以改变其作用域内定义的局部变量，但我们最好不要这样做。

写一个和Array.prototype.map()一样的Array.prototype.myMap()。你可以用for循环或者forEach方法。
```


# Answer

```js
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Only change code below this line
  for (let elem of this) {
    newArray.push(callback(elem));
  }
  // Only change code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});
```