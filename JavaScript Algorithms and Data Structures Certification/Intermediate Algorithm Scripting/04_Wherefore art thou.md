# Intermediate Algorithm Scripting: Wherefore art thou

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.


# 中文版本FCC
```
算法中级：罗密欧与朱丽叶

在这道题目中，我们要写一个函数，它接收两个参数：第一个参数是对象数组，第二个参数是一个对象。我们需要从对象数组中找出与第二个参数相等或包含第二个参数的所有对象，并以对象数组的形式返回。其中，相等的意思是原数组中的对象与第二个参数中对象的所有键值对完全相等；包含的意思是只要第二个参数中对象的所有键存在于原数组对象中，且它们对应的值相同即可。

比如，如果第一个参数是[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]，第二个参数是{ last: "Capulet" }。那么你需要以对象数组的形式返回第一个参数中的第三个元素，因为它包含第二个参数中定义的键last，且对应的值"Capulet"相同

如果你遇到了问题，请点击帮助。
```


# Question
```js
function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line


  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
```


# Answer
```js
function whatIsInAName(collection, source) {
  // Only change code below this line
  //将第二个参数的键值取出
  let srcKeys = Object.keys(source);

  //循环判断是否含有该键值和键值是否相等
  return collection.filter(function (obj) {
    for (let i = 0; i< srcKeys.length; i++) {
      if (
        !obj.hasOwnProperty(srcKeys[i]) ||
        obj[srcKeys[i]] !== source[srcKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });

  // Only change code above this line
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
```
