# Functional Programming: Remove Elements from an Array Using slice Instead of splice

A common pattern while working with arrays is when you want to remove items and keep the rest of the array. JavaScript offers the `splice` method for this, which takes arguments for the index of where to start removing items, then the number of items to remove. If the second argument is not provided, the default is to remove items through the end. However, the `splice` method mutates the original array it is called on. Here's an example:

```js
var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1); // Returns "London" and deletes it from the cities array
// cities is now ["Chicago", "Delhi", "Islamabad", "Berlin"]
```

As we saw in the last challenge, the `slice` method does not mutate the original array, but returns a new one which can be saved into a variable. Recall that the `slice` method takes two arguments for the indices to begin and end the slice (the end is non-inclusive), and returns those items in a new array. Using the `slice` method instead of `splice` helps to avoid any array-mutating side effects.

Rewrite the function `nonMutatingSplice` by using `slice` instead of `splice`. It should limit the provided `cities` array to a length of 3, and return a new array with only the first three items.

Do not mutate the original array provided to the function.


# 中文版本FCC
```
函数式编程：使用 slice 而不是 splice 从数组中移除元素

使用数组时经常遇到要删除一些元素并保留数组剩余部分的情况。为此，JavaScript 提供了splice方法，它接收两个参数：从哪里开始删除项目的索引，和要删除的项目数。如果没有提供第二个参数，默认情况下是移除到结尾的元素。但splice方法会改变调用它的原始数组。举个例子：

    var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
    cities.splice(3, 1); // 返回 "London" 并将它从 cities 数组删除
    // cities 现在是 ["Chicago", "Delhi", "Islamabad", "Berlin"]

正如我们在上一次挑战中看到的那样，slice方法不会改变原始数组，而是返回一个可以保存到变量中的新数组。回想一下，slice方法接收两个参数，从开始索引开始选取到结束（不包括该元素），并在新数组中返回这些元素。使用slice方法替代splice有助于避免数组变化产生的副作用。

用slice代替splice重写nonMutatingSplice函数。将cities数组长度限制为3，并返回一个仅包含前 3 项的新数组。

不要改变提供给函数的原始数组。
```


# Answer
```js
function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.slice(0, 3);

  // Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
```